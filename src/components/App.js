import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./SIgnUp/SignUp";
import Login from "./Login/Login";
import UserContext from "../context/UserContext";
import { useState } from "react";
import Products from "./Products/Products";
import Payment from "./Checkout/Payment";

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path='/registro' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="/produto/:idProduto"/>
          <Route path="/payment" element={<Payment />}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>);
}

export default App;
