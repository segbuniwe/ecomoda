import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PassageProvider } from "@passageidentity/passage-react";
import Index from "./screens/index";
import Login from "./screens/login";
import Dashboard from "./screens/dashboard";
import CreateClothingItemForm from "./components/CreateClothingItemForm";
import Search from "./screens/search";
import ClothingDetailPage from "./components/ClothingDetailPage";
import TeamSocialsPage from "./components/TeamSocialsPage";
import Guidelines from "./screens/guidelines";
import Educate from "./screens/educate";
import MainPage from "./components/MainPage";
import Support from "./screens/support";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/support' element={<Support />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/create' element={<CreateClothingItemForm />} />
            <Route exact path='/clothes' element={<Search />} />
            <Route
              exact
              path='/clothes/:clothes_id'
              element={<ClothingDetailPage />}
            />

            <Route exact path='/team' element={<TeamSocialsPage />} />
            <Route exact path='/guidelines' element={<Guidelines />} />
            <Route exact path='/educate' element={<Educate />} />
            <Route exact path='/home' element={<MainPage />} />
            <Route exact path="/chat" element={<Chatbot />} />
          </Routes>
        </Router>
      </>
    </PassageProvider>
  );
}

export default App;
