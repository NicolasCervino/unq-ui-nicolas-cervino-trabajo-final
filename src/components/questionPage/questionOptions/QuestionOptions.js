import Api from "../../../service/api";
import { GameContext } from "../../../context/GameContext";
import { useContext, useState, useEffect } from "react";
import OptionButton from "./optionButton/OptionButton";

const QuestionOptions = ({ question, setIndex }) => {
    const { answered, setAnswered } = useContext(GameContext);
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
                    if (answered.find((q) => q.question.id === question.id) === undefined) {
                        setAnswered((prevState) => [...prevState, { question, status: response.data.answer }]);
                        setIndex((prevState) => prevState + 1);
                    }
                }, 300);
            })
            .catch(() => console.log("La respuesta no es valida"));
    };

    return (
        <div className="col-10 d-flex flex-column justify-content-center gap-3 my-3">
            <OptionButton onClickAction={handleAnswer} option={question.option1} value={"option1"} buttonStatus={selectedAnswer} />
            <OptionButton onClickAction={handleAnswer} option={question.option2} value={"option2"} buttonStatus={selectedAnswer} />
            <OptionButton onClickAction={handleAnswer} option={question.option3} value={"option3"} buttonStatus={selectedAnswer} />
            <OptionButton onClickAction={handleAnswer} option={question.option4} value={"option4"} buttonStatus={selectedAnswer} />
        </div>
    );
};

export default QuestionOptions;
