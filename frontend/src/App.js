import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './segments/Nav';
import Product from './component/Product';
import Footer from './segments/Footer';
import Signup from './component/Signup';
import PrivateComponent from './component/PrivateComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>

          <Route element={<PrivateComponent />}> {/* insert into privateRouting */}
            {/* routing for pages */}
            <Route path='/product' element={<Product />} />
            <Route path='/add-products' element={<h1>Add products</h1>} />
            <Route path='/update-products' element={<h1>Update products</h1>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>

          <Route path='/sign-up' element={<Signup />} />

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
