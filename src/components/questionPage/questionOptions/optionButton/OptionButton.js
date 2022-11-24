const OptionButton = ({ onClickAction, option, value, buttonStatus }) => {
    const handleStatus = () => {
        if (buttonStatus === null || buttonStatus.answer !== value) {
            return "btn btn-light";
        }

        if (buttonStatus.answer === value && buttonStatus.status) {
            return "btn btn-success";
        } else if (buttonStatus.answer === value) {
            return "btn btn-danger";
        }
    };

    return (
        <button onClick={onClickAction} className={handleStatus()} value={value}>
            {option}
        </button>
    );
};

export default OptionButton;
