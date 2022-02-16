import './App.css';
import Container from '@mui/material/Container';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Container>
        <ItemListContainer></ItemListContainer>
      </Container>
    </div>
  );
}

export default App;
