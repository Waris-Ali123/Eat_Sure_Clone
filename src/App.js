import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './component/Home'
import Specific_Product from './component/Specific_Product';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Specific_Product/:id" element={<Specific_Product />} />
      </Routes>
    </Router>
    

    
    </>
  );
}

export default App;
