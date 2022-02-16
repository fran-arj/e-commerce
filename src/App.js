import './App.css';
import Container from '@mui/material/Container';
import ItemListContainer from './components/ItemListContainer';
import ResponsiveAppBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Container sc={{ marginY: 5 }}>
        <ItemListContainer titulo="Bienvenido" />
      </Container>
    </div>
  );
}

export default App;
