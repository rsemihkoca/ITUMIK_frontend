import './index.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import { Floors } from './pages/Floors';
import { HealthPage } from './pages/HealthPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/floors/:id'} element={<Floors />} />
        <Route path={'/healthPage/:id'} element={<HealthPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;