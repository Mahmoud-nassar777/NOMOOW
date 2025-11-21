// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboardpg from './Pages/Dashboardpg';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboardpg />} />
    </Routes>
  );
}

export default App;
