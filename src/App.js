import './index.css';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from './MainPage';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/layout'} element={<Layout />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;