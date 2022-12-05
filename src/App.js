import "./App.css";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import DifficultySelector from "./components/difficultySelector/DifficultySelector";
import { GameProvider } from "./context/GameContext";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GameProvider>
                <main className="container-fluid">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </GameProvider>
        </div>
    );
}

export default App;
