import { GameContext } from "../../context/GameContext";
import { useState, useEffect, useContext } from "react";
import QuestionOptions from "./questionOptions/QuestionOptions";
import CustomBanner from "../customBanner/CustomBanner";
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
            <CustomBanner difficulty={selectedDifficulty} />

            <div className="col-10 col-lg-5 question-page--question">
                <p className="">{currentQuestion.question}</p>
            </div>

            <QuestionOptions question={currentQuestion} setIndex={setIndex} setCurrentQuestion={setCurrentQuestion} />

            <CustomBanner
                difficulty={selectedDifficulty}
                extraClass={"current-question-banner"}
                currentQuestion={index + 1 + "/" + questions.length}
            />
        </div>
    );
};

export default QuestionPage;
