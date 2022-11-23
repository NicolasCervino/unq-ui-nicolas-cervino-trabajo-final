import { GameContext } from "../../context/GameContext";
import { useState, useEffect, useContext } from "react";
import "./question-page.css";

const QuestionPage = () => {
    const { questions, answered, setFinished, setAnswered, selectedDifficulty } = useContext(GameContext);
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (questions.length === answered.length) {
            setFinished(true);
        }
    }, [answered]);

    useEffect(() => {
        if (index < questions.length) {
            setCurrentQuestion(questions[index]);
        }
    }, [questions, index]);

    const handleNext = () => {
        if (questions.length > index + 1) {
            setIndex((prevState) => prevState + 1);
        }
    };

    return (
        <div className="row justify-content-center question-page">
            <div className="col-12 question-page--difficulty-banner">{selectedDifficulty}</div>

            <div className="col-10 question-page--question">
                <p className="">{currentQuestion.question}</p>
            </div>

            <div className="col-10 d-flex flex-column justify-content-center gap-3 my-3">
                <button className="btn btn-light">{currentQuestion.option1}</button>
                <button className="btn btn-light">{currentQuestion.option2}</button>
                <button className="btn btn-light">{currentQuestion.option3}</button>
                <button className="btn btn-light">{currentQuestion.option4}</button>
            </div>
            <div className="col-10 mt-1 justify-self-end">
                <button className="btn btn-success" onClick={handleNext}>
                    Next
                </button>

                <p>{index + 1 + "/" + questions.length}</p>
            </div>
        </div>
    );
};

export default QuestionPage;
