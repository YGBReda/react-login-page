
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
         <Route path="/register" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
