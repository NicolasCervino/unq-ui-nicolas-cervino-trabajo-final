import "./difficulty-banner.css";

const DifficultyBanner = ({ difficulty }) => {
    return (
        <div className={"col-12 difficulty-banner"} style={{ backgroundColor: `var(--${difficulty})` }}>
            {difficulty}
        </div>
    );
};

export default DifficultyBanner;
