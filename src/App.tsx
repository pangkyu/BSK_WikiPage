import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Modify from "./pages/Modify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/detail/:id" Component={Detail} />
        <Route path="/edit" Component={Edit} />
        <Route path="/modify/:id" Component={Modify} />
      </Routes>
    </Router>
  );
}

export default App;
