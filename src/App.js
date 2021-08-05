import './App.css';
import { CardInformation } from './shared/card-information/CardInformation';

function App() {

  const propCardInformation = {
    urlImg: process.env.REACT_APP_URL_IMAGE,
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
