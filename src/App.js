import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/layout/details/ItemDetailContainer';
import ItemListContainer from './components/layout/items/ItemListContainer';
import ResponsiveAppBar from './components/layout/NavBar';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route
            index
            element={
              <Container maxWidth="xl" sx={{ marginY: 7 }}>
                <ItemListContainer />
              </Container>
            }
          ></Route>
          <Route path="category">
            <Route
              path=":itemCat"
              element={
                <Container maxWidth="xl" sx={{ marginY: 7 }}>
                  <ItemListContainer />
                </Container>
              }
            ></Route>
          </Route>
          <Route path="detail">
            <Route path=":itemId" element={<ItemDetailContainer />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </Fragment>
  );
}

export default App;
