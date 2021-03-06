import { Fragment, useEffect, useState } from 'react';
import ItemList from './ItemList';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  //https://openlibra.com/es/page/public-api
  const { itemCat } = useParams();
  const parameters = itemCat
    ? `?keyword=${itemCat}`
    : '?any_tags=[scrum,javascript]&criteria=most_viewed';
  const url = `https://www.etnassoft.com/api/v1/get/${parameters}`;
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setItems(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          p: 2,
        }}
      >
        {items.length ? (
          <ItemList items={items} />
        ) : (
          <LinearProgress color="success" />
        )}
      </Box>
    </Fragment>
  );
};

export default ItemListContainer;
