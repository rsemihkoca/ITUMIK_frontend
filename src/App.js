import './index.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
