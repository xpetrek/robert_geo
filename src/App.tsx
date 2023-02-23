import VyhradneDP from "./VyhradneDP";
import ZrusenePU from "./ZrusenePU";
import UrcenePU from "./UrcenePU";
import Tables from "./Tables";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/vdp" element={<VyhradneDP />} />
          <Route path="/upu" element={<UrcenePU />} />
          <Route path="/zpu" element={<ZrusenePU />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
