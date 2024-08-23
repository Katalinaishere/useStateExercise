import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Navigate from "./Components/Navigate";
import Exercise1 from "./Components/Exercise1/Exercise1";
import Exercise2 from "./Components/Exercise2/Exercise2"
import Exercise3 from "./Components/Exercise3/Exercise3"
import Exercise4 from "./Components/Exercise4/Exercise4"
function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route path="/exercise3" element={<Exercise3 />} />
        <Route path="/exercise4" element={<Exercise4 />} />
      </Routes>
    </>
  );
}

export default App;
