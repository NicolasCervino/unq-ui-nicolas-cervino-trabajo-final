import { useState, useEffect } from "react";
import Api from "../../service/api";
import DifficultySelector from "../difficultySelector/DifficultySelector";
import CustomBanner from "../customBanner/CustomBanner";
import "./home.css";

const Home = () => {
    const [difficulties, setDifficulties] = useState(null);

    useEffect(() => {
        Api.getDifficulties().then((response) => {
            setDifficulties(response.data);
        });
    }, []);

    return (
        <div className="row home">
            <CustomBanner bgColor={"#4d4daa"} position={"align-self-start"}>
                <h1>Preguntados</h1>
            </CustomBanner>
            {difficulties && <DifficultySelector difficulties={difficulties} />}
        </div>
    );
};
export default Home;
