import { useState } from "react";
import DifficultyButton from "./difficultyButton/DifficultyButton";
import "./difficulty-selector.css";

const DifficultySelector = ({ difficulties }) => {
    const [currentDifficulty, setCurrentDifficulty] = useState(null);

    const handleDifficultySelect = (e) => {
        setCurrentDifficulty(e.target.value);
    };

    const handlePlay = () => {};

    return (
        <div className="difficulty-selector--container">
            {difficulties.map((d) => (
                <DifficultyButton key={d} difficulty={d} onClickAction={handleDifficultySelect} active={currentDifficulty === d} />
            ))}
            <button className="btn btn-success m-3 mt-5" disabled={currentDifficulty === null} onClick={handlePlay}>
                Play!
            </button>
        </div>
    );
};

export default DifficultySelector;
