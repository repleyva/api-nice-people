
import './App.css';
import "./index.css"
import Search from './components/Search';
import Weather from './components/Weather';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Search/>
			<Weather/>
			<News/>
    </div>
  );
}

export default App;
