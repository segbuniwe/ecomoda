import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import CreateClothingItemForm from './components/CreateClothingItemForm';
import ClothesList from './components/ClothesList';
import Navbar from './components/Navbar';
import ClothingDetailPage from './components/ClothingDetailPage';
import CommunityGuidelines from './components/CommunityGuidelines';
import About from './components/About';
import EducationPage from './components/EducationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exacy path='/signup' element={<SignUpForm />}></Route>
            <Route exact path='/login' element={<LoginForm />}></Route>
            <Route exact path='/create' element={<CreateClothingItemForm />}></Route>
            <Route exact path='/clothes' element={<ClothesList />}></Route>
            <Route exact path='/clothes/:clothes_id' element={<ClothingDetailPage />}></Route>
            <Route exact path='/guidelines' element={<CommunityGuidelines />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/education' element={<EducationPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
