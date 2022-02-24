import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';

function Item({ title, author, cover }) {
  return (
    <div>
      <Paper elevation={3}>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image={cover}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
      </Paper>
    </div>
  );
}
export default Item;
