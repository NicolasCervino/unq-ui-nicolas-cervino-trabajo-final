import "./answer-alert.css";

const AnswerAlert = ({ answerStatus }) => {
    return (
        answerStatus && (
            <div className={answerStatus ? "answer-alert" : "d-none"}>
                {answerStatus.status ? (
                    <h1 className="answer-alert--message correct">¡CORRECTO!</h1>
                ) : (
                    <h1 className="answer-alert--message incorrect">¡INCORRECTO!</h1>
                )}
            </div>
        )
    );
};

export default AnswerAlert;
