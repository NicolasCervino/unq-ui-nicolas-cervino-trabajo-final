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
            <CustomBanner bgColor={`var(--${selectedDifficulty})`} position={"align-self-start"}>
                <ProgressBar difficulty={selectedDifficulty} timePassed={timePassed} timeLeft={timeLeft} duration={duration} />
            </CustomBanner>
            <div className="col-10 col-lg-5 question-page--question">
                <p className="">{currentQuestion.question}</p>
            </div>
            <QuestionOptions question={currentQuestion} setIndex={setIndex} setCurrentQuestion={setCurrentQuestion} timeLeft={timeLeft} />
            <CustomBanner bgColor={`var(--${selectedDifficulty})`} position={"align-self-end"}>
                {index + 1 + "/" + questions.length}
            </CustomBanner>
        </div>
    );
};

export default QuestionPage;
