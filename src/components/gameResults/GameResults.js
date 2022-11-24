import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./game-results.css";

const GameResults = () => {
    const { answered, questions, setFinished, setQuestions, setSelectedDifficulty, setAnswered } = useContext(GameContext);

    const handlePlayAgain = () => {
        setFinished(false);
        setQuestions(null);
        setSelectedDifficulty(null);
        setAnswered([]);
    };

    return (
        <div className="row game-results align-items-center justify-content-center">
            <div className="col-10 text-white">
                <h1 className="game-results--number">
                    {answered.filter((q) => q.status).length} / {questions.length}
                </h1>
                <p>Correct Answers:</p>
            </div>
            <div className="col-10">
                <button className="btn btn-success" onClick={handlePlayAgain}>
                    Play again:{" "}
                </button>
            </div>
        </div>
    );
};

export default GameResults;
