import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Api from "../../service/api";
import QuestionPage from "../questionPage/QuestionPage";

const Game = () => {
    const { selectedDifficulty, setQuestions, questions, finished } = useContext(GameContext);

    useEffect(() => {
        Api.getQuestions(selectedDifficulty).then((response) => {
            setQuestions(response.data);
        });
    }, [selectedDifficulty]);

    // if (finished) {
    //     return <GameResults></GameResults>
    // }

    return questions && <QuestionPage></QuestionPage>;
};

export default Game;
