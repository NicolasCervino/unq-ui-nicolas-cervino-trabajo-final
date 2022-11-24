import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [finished, setFinished] = useState(false);
    const [answered, setAnswered] = useState([]);

    return (
        <GameContext.Provider
            value={{
                selectedDifficulty,
                setSelectedDifficulty,
                questions,
                setQuestions,
                answered,
                setAnswered,
                finished,
                setFinished,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
