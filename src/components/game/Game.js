import { useEffect, useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Api from "../../service/api";
import QuestionPage from "../questionPage/QuestionPage";
import GameResults from "../gameResults/GameResults";

const Game = () => {
    const { selectedDifficulty, setQuestions, questions, finished, setSelectedDifficulty } = useContext(GameContext);

    useEffect(() => {
        selectedDifficulty
            ? Api.getQuestions(selectedDifficulty).then((response) => {
                  setQuestions(response.data);
              })
            : Api.getQuestions().then((response) => {
                  setQuestions(response.data);
                  setSelectedDifficulty("easy");
                  // SI ENTRO AL JUEGO SIN SELECCIONAR DIFICULTAD POR DEFECTO ES EASY
              });
    }, [selectedDifficulty]);

    if (finished) {
        return <GameResults></GameResults>;
    }

    return questions && <QuestionPage></QuestionPage>;
};

export default Game;
