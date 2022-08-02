import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
