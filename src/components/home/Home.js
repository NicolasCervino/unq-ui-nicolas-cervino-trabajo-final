import { useState, useEffect } from "react";
import Api from "../../service/api";

const Home = () => {
    const [difficulties, setDifficulties] = useState(null);

    useEffect(() => {
        Api.getDifficulties().then((response) => {
            setDifficulties(response.data);
        });
    }, []);

    return (
        <div>
            {difficulties && difficulties.map((d) => <button key={d}>{d}</button>)}
            <button>Play!</button>
        </div>
    );
};

export default Home;
