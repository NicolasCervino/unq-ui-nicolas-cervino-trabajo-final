import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [finished, setFinished] = useState(false);
    const [answered, setAnswered] = useState([]);

    const addAnswer = (question, answer) => {
        if (answered.find((q) => q.question.id === question.id) === undefined) {
            setAnswered((prevState) => [...prevState, answer]);
        }
    };

    return (
        <GameContext.Provider
            value={{
                selectedDifficulty,
                setSelectedDifficulty,
                questions,
                setQuestions,
                answered,
                setAnswered,
                addAnswer,
                finished,
                setFinished,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
