import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Welcome'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
    </div>
  );
}

export default App;
