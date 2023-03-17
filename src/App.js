import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage";
import landingPage from "./pages/LandingPage/landingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
