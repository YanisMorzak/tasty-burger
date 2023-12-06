import React from 'react';
import LoginPage from './components/pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderPage from './components/pages/order/OrderPage';
import NotFound from './components/pages/error/NotFound';

const App = () => {

  return (
       
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>   
    </BrowserRouter>
   
  );
};

export default App;