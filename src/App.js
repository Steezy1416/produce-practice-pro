import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import PracticePage from "./pages/practicePage/PracticePage";
import HomePage from "./pages/homePage/HomePage";
import FlashcardsPage from "./pages/flashcardsPage/FlashcardsPage";
import FlashcardPlayground from "./pages/flashcardsPage/FlashcardPlayground";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/flashcards" >
          <Route index element={<FlashcardsPage />} />
          <Route path=":cardName" element={<FlashcardPlayground/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
