import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import CreateClothingItemForm from './components/CreateClothingItemForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exacy path='/signup' element={<SignUpForm />}></Route>
            <Route exact path='/login' element={<LoginForm />}></Route>
            <Route exact path='/create' element={<CreateClothingItemForm />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
