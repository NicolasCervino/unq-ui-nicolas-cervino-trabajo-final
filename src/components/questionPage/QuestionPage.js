import { GameContext } from "../../context/GameContext";
import { useState, useEffect, useContext } from "react";
import QuestionOptions from "./questionOptions/QuestionOptions";
import DifficultyBanner from "../difficultyBanner/DifficultyBanner";
import "./question-page.css";

const QuestionPage = () => {
    const { questions, answered, setFinished, selectedDifficulty } = useContext(GameContext);
    const [index, setIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questions[index]);

    useEffect(() => {
        if (questions.length === answered.length) {
            setFinished(true);
        }
        if (index < questions.length) {
            setCurrentQuestion(questions[index]);
        }
    }, [answered, index, questions, setFinished]);

    return (
        <div className="row justify-content-center question-page">
            <DifficultyBanner difficulty={selectedDifficulty} />

            <div className="col-10 question-page--question">
                <p className="">{currentQuestion.question}</p>
            </div>

            <QuestionOptions question={currentQuestion} setIndex={setIndex} setCurrentQuestion={setCurrentQuestion} />

            <div className="col-10 mt-1 justify-self-end text-white">
                <p>{index + 1 + "/" + questions.length}</p>
            </div>
        </div>
    );
};

export default QuestionPage;
