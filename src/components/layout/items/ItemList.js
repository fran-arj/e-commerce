import Item from './Item';
import Box from '@mui/material/Box';

function ItemList({ items }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width: 250,
          height: '100%',
        },
      }}
    >
      {items.map((item) => {
        return (
          <Item
            key={item.ID}
            idItem={item.ID}
            title={item.title}
            author={item.author}
            cover={item.cover}
          />
        );
      })}
    </Box>
  );
}

export default ItemList;
