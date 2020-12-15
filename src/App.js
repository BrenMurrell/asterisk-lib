import './App.css';
import { Container } from './components/All'
import Cards from './samples/Cards'


const App = () => {
  return (
    <div className="App">
      <Container>
        <div>
          <h1>Asterisk Library test page</h1>
          <h2>Cards</h2>
        </div>
      </Container>
      <Cards />
    </div>
  );
}

export default App;
