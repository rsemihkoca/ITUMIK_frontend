import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Floors, MainPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/floors/:id"} element={<Floors />} />
      </Routes>
    </Router>
  );
}

export default App;
