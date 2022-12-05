import { useState, useContext } from "react";
import DifficultyButton from "./difficultyButton/DifficultyButton";
import { GameContext } from "../../context/GameContext";
import { Link } from "react-router-dom";
import "./difficulty-selector.css";

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
        <div className="difficulty-selector--container col-12">
            <div className="col-10 col-lg-6 d-flex flex-column justify-content-center gap-3 my-3">
                {difficulties.map((d) => (
                    <DifficultyButton key={d} difficulty={d} onClickAction={handleDifficultySelect} active={currentDifficulty === d} />
                ))}
                <Link to={"/game"} className={`btn btn-play m-3 mt-5 ${!currentDifficulty ? "disabled" : ""}`} onClick={handlePlay}>
                    PLAY
                </Link>
            </div>
        </div>
    );
};

export default DifficultySelector;
