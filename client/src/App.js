import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './SignUpForm';


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exacy path='/signup' element={<SignUpForm />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
