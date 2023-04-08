import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './segments/Nav';
import Product from './component/Product';
import Footer from './segments/Footer';

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
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
