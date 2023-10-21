import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";
import Index from "./screens/index";
import Login from "./screens/login";
import Dashboard from "./screens/dashboard";
import CreateClothingItemForm from "./components/CreateClothingItemForm";
import ClothesList from "./components/ClothesList";
import ClothingDetailPage from "./components/ClothingDetailPage";

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path="/create" element={<CreateClothingItemForm />} />
            <Route exact path="/clothes" element={<ClothesList />} />
            <Route exact path="/clothes/:clothes_id" element={<ClothingDetailPage />} />
          </Routes>
        </Router>
      </>
    </PassageProvider>
  );
}

export default App;
