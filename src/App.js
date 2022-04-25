import './App.css';
import Navbar from "./components/navbar";
import Role from './pages/Role';
import Start from './pages/Start';
import Artifacts from './pages/Artifacts';
import Sprint from './pages/Sprint';
import Estimation from './pages/Estimation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/Artifacts" element={<Artifacts />} />
          <Route path="/Sprint" element={<Sprint />} />
          <Route path="/Estimation" element={<Estimation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
