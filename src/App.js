import './App.css';
import Navbar from "./components/navbar";
import Role from './pages/Role';
import Start from './pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<Start />} />
        <Route path="/Role" element={<Role />} />
      </Routes>
    </Router>
  );
}

export default App;
