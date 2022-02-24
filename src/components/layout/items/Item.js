import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';

function Item({ title, author, cover }) {
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
        </CardContent>
      </Paper>
    </div>
  );
}
export default Item;
