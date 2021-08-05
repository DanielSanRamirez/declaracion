import manHello from './assets/images/hombre2.png'
import './App.css';
import { CardInformation } from './shared/card-information/CardInformation';

function App() {

  const propCardInformation = {
    urlImg: manHello,
    text: 'Hola como estás mucho gusto'
  } 

  return (
    <div className="App">
      <header className="App-header">
        <CardInformation {...propCardInformation} />
      </header>
    </div>
  );
}

export default App;
