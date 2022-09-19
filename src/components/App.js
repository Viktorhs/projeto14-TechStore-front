import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./SIgnUp/SignUp";
import Login from "./Login/Login";
import UserContext from "../context/UserContext";
import { useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import Payment from "./Checkout/Payment"

function App() {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false)
  return (
    <UserContext.Provider value={{user, setUser, isLogin, setIsLogin}}>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path='/registro' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="/carrinho" element={<Cart />}/>
          <Route path="/produto/:idProduto"/>
          <Route path="/checkout" element={<Payment />}/>
          
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>);
}

export default App;
