import Api from "../../../service/api";
import { GameContext } from "../../../context/GameContext";
import { useContext, useState, useEffect } from "react";
import OptionButton from "./optionButton/OptionButton";
import AnswerAlert from "../answerAlert/AnswerAlert";

const QuestionOptions = ({ question, setIndex, timeLeft }) => {
    const { answered, addAnswer } = useContext(GameContext);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        setSelectedAnswer(null);
    }, [answered]);

    const handleAnswer = (e) => {
        Api.postAnswer(question.id, e.target.value)
            .then((response) => {
                setSelectedAnswer({ answer: e.target.value, status: response.data.answer });
                // Un delay para que de tiempo a ver el cambio de color del boton
                setTimeout(() => {
                    addAnswer(question, { question, status: response.data.answer });
                    setIndex((prevState) => prevState + 1);
                }, 600);
            })
            .catch(() => console.log("La respuesta no es valida"));
    };

    useEffect(() => {
        if (timeLeft === 0) {
            setSelectedAnswer({ answer: "", status: false });
            setTimeout(() => {
                addAnswer(question, { question, status: false });
                setIndex((prevState) => prevState + 1);
            }, 600);
        }
    }, [timeLeft]);

    return (
        <>
            <div className="col-10 col-lg-6 d-flex flex-column justify-content-center gap-3 my-3">
                <OptionButton onClickAction={handleAnswer} option={question.option1} value={"option1"} buttonStatus={selectedAnswer} />
                <OptionButton onClickAction={handleAnswer} option={question.option2} value={"option2"} buttonStatus={selectedAnswer} />
                <OptionButton onClickAction={handleAnswer} option={question.option3} value={"option3"} buttonStatus={selectedAnswer} />
                <OptionButton onClickAction={handleAnswer} option={question.option4} value={"option4"} buttonStatus={selectedAnswer} />
            </div>
            <AnswerAlert answerStatus={selectedAnswer} />
        </>
    );
};

export default QuestionOptions;
