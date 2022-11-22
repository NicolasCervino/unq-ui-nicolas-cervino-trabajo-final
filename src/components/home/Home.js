import { useState, useEffect } from "react";
import Api from "../../service/api";
import DifficultySelector from "../difficultySelector/DifficultySelector";

const Home = () => {
    const [difficulties, setDifficulties] = useState(null);

    useEffect(() => {
        Api.getDifficulties().then((response) => {
            setDifficulties(response.data);
        });
    }, []);

    return difficulties && <DifficultySelector difficulties={difficulties} />;
};
export default Home;
