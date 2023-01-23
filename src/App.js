import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={< Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


/* <header className="App-header">
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
      </header> */
