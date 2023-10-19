import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exacy path='/signup' element={<SignUpForm />}></Route>
            <Route exact path='/login' element={<LoginForm />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
