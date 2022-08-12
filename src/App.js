import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1'
import ReactLogo from './components/ReactLogo'
import Courses from './components/Courses'

function App() {
  return (
    <div className="App">
      <Header1 />
      <Courses />
      <ReactLogo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
