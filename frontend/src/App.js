import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './segments/Nav';
import Product from './component/Product';
import Footer from './segments/Footer';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path='/product' element={<Product />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product' element={<Product />} />
          <Route path='/sign-up' element={<Signup />} />

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
