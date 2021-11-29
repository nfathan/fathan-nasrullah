// import logo from './logo.svg';
import { 
  // BrowserRouter as Router,
  HashRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import '../App.scss';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/products" component={Projects} />
          <Route path="/" component={About} exact />
        </Switch>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </div>
    </Router>
  );
}

export default App;
