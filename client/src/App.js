import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./screens/index";
import Login from "./screens/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
