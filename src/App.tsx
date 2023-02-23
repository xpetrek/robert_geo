import VyhradneDP from "./VyhradneDP";
import NavrhyPU from "./NavrhyPU";
import ZrusenePU from "./ZrusenePU";
import Tables from "./Tables";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/vdp" element={<VyhradneDP />} />
          <Route path="/npu" element={<NavrhyPU />} />
          <Route path="/zpu" element={<ZrusenePU />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
