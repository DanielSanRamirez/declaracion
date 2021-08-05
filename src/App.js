import manHello from './assets/images/hombre.png'
import './App.css';
import { CardInformation } from './shared/card-information/CardInformation';

function App() {

  const propCardInformation = {
    urlImg: 'https://ouch-cdn2.icons8.com/fC0jJAKzloPQ3aHDc5PKdaL6mcCRt7cHIZq_jNNKlUA/rs:fit:1207:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQ5/L2Q2OTk3MGMxLWZm/NGYtNDc1NS1hYjAz/LWEwZmY0ZDE0Nzli/OS5wbmc.png',
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
