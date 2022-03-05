import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardContent, Link, Typography } from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

function Item({ idItem, title, author, cover }) {
  const ups = () => {
    console.log('idItem', idItem);
  };
  return (
    <div>
      <Paper elevation={3}>
        <CardMedia component="img" image={cover} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="primary.main">
            {author}
          </Typography>
          <Link
            to={`/detail/${idItem}`}
            onClick={() => {
              const link = `https://www.etnassoft.com/api/v1/get/?id=${idItem}`;
              console.info(link);
            }}
          >
            <AddCircleTwoToneIcon color="primary" />
          </Link>
          <Button onClick={ups}>
            <Link to={`/detail/${idItem}`}>Detalle</Link>
          </Button>
        </CardContent>
      </Paper>
    </div>
  );
}
export default Item;
