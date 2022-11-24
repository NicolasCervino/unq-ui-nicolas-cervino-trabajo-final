import "./difficulty-button.css";

const DifficultyButton = ({ difficulty, onClickAction, active }) => {
    return (
        <button className={`btn m-2 ${active ? `btn-${difficulty}` : "btn-light"} `} onClick={onClickAction} value={difficulty}>
            {difficulty}
        </button>
    );
};

export default DifficultyButton;
