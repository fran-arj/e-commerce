import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import { Fragment } from 'react';
import ItemListContainer from './components/layout/items/ItemListContainer';
import ResponsiveAppBar from './components/layout/NavBar';

function App() {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <CssBaseline />
      <Container maxWidth="xl" sc={{ marginY: 5 }}>
        <ItemListContainer />
      </Container>
    </Fragment>
  );
}

export default App;
