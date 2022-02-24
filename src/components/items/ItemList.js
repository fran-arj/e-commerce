import Item from './Item';

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <Item title={item.title} author={item.author} cover={item.cover} />
        );
      })}
    </div>
  );
}

export default ItemList;
