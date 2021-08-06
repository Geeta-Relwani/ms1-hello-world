import './App.css';
import FruitList from './components/FruitList';
import SayHello from './components/SayHello';
import Header from './components/header';
import Timer from './components/Timer';

function App() {

  let name = 'geeta';
  return (
    <div className="App">
      <h1>Hello world</h1>
      <SayHello name={name}/>
      <FruitList fruits={['Apple','Mango','Banana']}/>
      <Header name='geeta'/>
      <Timer />
    </div>
  );
}

export default App;
