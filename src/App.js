import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import CreateTeam from "./components/CreateTeam";
import Draw from "./components/Draw";

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/createTeam" exact element={<CreateTeam />} />
        <Route path="/" element={<Draw />} />
      </Routes>
    </div>
  );
}

export default App;
