import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../context/GameContext";
import Api from "../../service/api";
import DifficultySelector from "../difficultySelector/DifficultySelector";
import Game from "../game/Game";

const Home = () => {
    const [difficulties, setDifficulties] = useState(null);
    const { selectedDifficulty } = useContext(GameContext);

    useEffect(() => {
        Api.getDifficulties().then((response) => {
            setDifficulties(response.data);
        });
    }, []);

    if (selectedDifficulty) {
        return <Game></Game>;
    }

    return difficulties && <DifficultySelector difficulties={difficulties} />;
};
export default Home;
