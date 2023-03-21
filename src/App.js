import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import PracticePage from "./pages/practicePage/PracticePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/practice" element={<PracticePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
