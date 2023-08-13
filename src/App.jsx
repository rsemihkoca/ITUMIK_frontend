import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Floors, MainPage } from "./pages";

import { Table } from "./components/Tables";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/floors/:id"} element={<Floors />} />
      </Routes>
    </Router>
    // <Table />
  );
}

export default App;
