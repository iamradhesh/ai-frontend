import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConnectPage from "./pages/ConnectPage";
import Navbar from "./components/Navbar";
import AiChat from "./components/AiChat";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/chat" element={<AiChat />} />
      </Routes>
      
    </Router>
    
    
  );
};

export default App;
