import "./App.css";
import Home from "./components/home/Home";
import { GameProvider } from "./context/GameContext";

function App() {
    return (
        <div className="App">
            <GameProvider>
                <main className="container-fluid">
                    <Home></Home>
                </main>
            </GameProvider>
        </div>
    );
}

export default App;
