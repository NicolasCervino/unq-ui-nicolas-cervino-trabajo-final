import axios from "axios";

const host = "https://preguntados-api.vercel.app/api";

const getDifficulties = () => {
    return axios.get(host + "/difficulty");
};

const getQuestions = (difficulty) => {
    return axios.get(host + "/questions", {
        params: {
            difficulty: difficulty,
        },
    });
};

const postAnswer = (id, answer) => {
    return axios.post(host + "/answer", {
        questionId: id,
        option: answer,
    });
};

const Api = {
    getDifficulties,
    getQuestions,
    postAnswer,
};

export default Api;
