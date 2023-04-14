import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './segments/Nav';
import Footer from './segments/Footer';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>

          <Route element={<PrivateComponent />}> {/* insert into privateRouting */}
            {/* routing for pages */}
            <Route path='/product' element={<ProductList />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/update-products/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>

          <Route path='/sign-up' element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
