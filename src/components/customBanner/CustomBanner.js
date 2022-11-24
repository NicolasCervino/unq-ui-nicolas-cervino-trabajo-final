import "./custom-banner.css";

const CustomBanner = ({ difficulty, extraClass, currentQuestion }) => {
    return (
        <div className={`col-12 custom-banner ${currentQuestion ? extraClass : ""}`} style={{ backgroundColor: `var(--${difficulty})` }}>
            {currentQuestion ? currentQuestion : difficulty.toUpperCase()}
        </div>
    );
};

export default CustomBanner;
