import ImportantLinks from './modules/components/ImportantLinks';
import Info from './modules/components/Info';
import InfoBar from './modules/components/InfoBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InfoBar/>
      </header>
      <div className="MainText">
        <Info/>
        <ImportantLinks/>
      </div>
    </div>
  );
}

export default App;
