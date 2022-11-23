import { useState, useContext } from "react";
import DifficultyButton from "./difficultyButton/DifficultyButton";
import "./difficulty-selector.css";
import { GameContext } from "../../context/GameContext";

const DifficultySelector = ({ difficulties }) => {
    const [currentDifficulty, setCurrentDifficulty] = useState(null);
    const { setSelectedDifficulty } = useContext(GameContext);

    const handleDifficultySelect = (e) => {
        setCurrentDifficulty(e.target.value);
    };

    const handlePlay = () => {
        if (currentDifficulty) {
            setSelectedDifficulty(currentDifficulty);
        }
    };

    return (
        <div className="difficulty-selector--container row">
            <div className="col-10 d-flex flex-column justify-content-center gap-3 my-3">
                {difficulties.map((d) => (
                    <DifficultyButton key={d} difficulty={d} onClickAction={handleDifficultySelect} active={currentDifficulty === d} />
                ))}
            </div>
            <div className="col-10 d-flex flex-column">
                <button className="btn btn-success m-3 mt-5" disabled={currentDifficulty === null} onClick={handlePlay}>
                    Play!
                </button>
            </div>
        </div>
    );
};

export default DifficultySelector;
