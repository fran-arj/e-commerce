import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment } from 'react';

const ItemDetail = ({ item }) => {
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 2,
            width: '100%',
            height: '100%',
          },
        }}
      >
        {item.map((i) => {
          return (
            <div key={i.ID}>
              <Typography variant="h4" gutterBottom component="div">
                {i.title}
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                {i.author}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                {i.publisher_date}
              </Typography>
              <img src={i.cover} />
              <Typography variant="body2" gutterBottom component="div">
                {i.content}
              </Typography>
            </div>
          );
        })}
      </Box>
    </Fragment>
  );
};

export default ItemDetail;
