import './App.css';
import { CARD } from './constants/card.constants';
import { CardInformation } from './shared/card-information/CardInformation';

function App() {

  const propCardInformation = {
    urlImg: CARD.BEGINNING.URL_IMG,
    text: 'Hola como estás mucho gusto'
  } 

  console.log(process.env);

  return (
    <div className="App">
      <header className="App-header">
        <CardInformation {...propCardInformation} />
      </header>
    </div>
  );
}

export default App;
