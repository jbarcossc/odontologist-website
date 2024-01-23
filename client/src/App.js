import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Turnos from "./pages/Turnos";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/turnos" element={<Turnos/>}></Route>
          <Route path="/nuevo-turno" element={<Add/>}></Route>
          <Route path="/actualizar-turno" element={<Update/>}></Route>
          <Route path="" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
