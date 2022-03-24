import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Container } from "./styled/Container";
import { Main } from "./components/Main";
import Global from "./components/Global";

function App() {
  return (
    <Router>
      <Global />
      <Main>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route path="/highScores" element={<HighScores />} />
            <Route path="/gameOver" element={<GameOver />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
