import GlobalStyle from "../assets/GlobalStyle";
import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./SIgnUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/registro' element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>);
}

export default App;
