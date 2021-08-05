import './App.css';
import { CARD } from './constants/card.constants';
import { CardInformation } from './shared/card-information/CardInformation';

function App() {

  const propCardInformation = {
    urlImg: CARD.BEGINNING.URL_IMG,
    textTitle: CARD.BEGINNING.TEXT_TITLE,
    textBody: CARD.BEGINNING.TEXT_BODY
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
