const DifficultyButton = ({ difficulty, onClickAction, active }) => {
    return (
        <button className={`btn m-3 ${active ? "btn-primary" : "btn-outline-secondary"}`} onClick={onClickAction} value={difficulty}>
            {difficulty}
        </button>
    );
};

export default DifficultyButton;
