
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import ProductListComponent from './components/ProductListComponent';
import AddProductComponent from './components/AddProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {
  return (
    <Router>
      <div  className="container">
        <Routes>
          <Route path="/" element={<ProductListComponent />} />
          <Route path="/products" element={<ProductListComponent />} />
          <Route path="/add-product" element={<AddProductComponent />} />
          <Route path="/update-product/:id" element={<UpdateProductComponent />} />
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
