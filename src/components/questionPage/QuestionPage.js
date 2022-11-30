import { GameContext } from "../../context/GameContext";
import { useState, useEffect, useContext } from "react";
import QuestionOptions from "./questionOptions/QuestionOptions";
import CustomBanner from "../customBanner/CustomBanner";
import ProgressBar from "./progressBar/ProgressBar";
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

    // El tiempo que hay para contestar cada pregunta
    const duration = 25;

    const [timePassed, setTimePassed] = useState(0);
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimePassed((prevCount) => prevCount + 1);
            setTimeLeft((prevState) => prevState - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            setTimePassed(0);
            setTimeLeft(duration);
        };
    }, [currentQuestion, answered]);

    return (
        <div className="row justify-content-center question-page">
            <ProgressBar difficulty={selectedDifficulty} timePassed={timePassed} timeLeft={timeLeft} duration={duration} />
            <div className="col-10 col-lg-5 question-page--question">
                <p className="">{currentQuestion.question}</p>
            </div>
            <QuestionOptions question={currentQuestion} setIndex={setIndex} setCurrentQuestion={setCurrentQuestion} timeLeft={timeLeft} />
            <CustomBanner
                difficulty={selectedDifficulty}
                extraClass={"current-question-banner"}
                currentQuestion={index + 1 + "/" + questions.length}
            />
        </div>
    );
};

export default QuestionPage;
