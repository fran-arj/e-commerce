import { Box, Container, LinearProgress } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  //const url = `https://www.etnassoft.com/api/v1/get/?id=589`;
  const url = `https://www.etnassoft.com/api/v1/get/?id=${itemId}`;

  const [item, setItem] = useState([]);

  const getItem = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setItem(data);
      console.log(item);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="xl" sx={{ marginY: 7 }}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: 2,
          }}
        >
          {item.length ? (
            <ItemDetail item={item} />
          ) : (
            <LinearProgress color="success" />
          )}
        </Box>
      </Container>
    </Fragment>
  );
};

export default ItemDetailContainer;
