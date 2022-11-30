import { useState, useEffect } from "react";
import "./progress-bar.css";

const ProgressBar = ({ difficulty, timePassed, timeLeft, duration }) => {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        if (timePassed <= duration) {
            setBarWidth((timePassed / duration) * 100);
        }
    }, [timePassed, duration]);

    return (
        <div className="question-progress-bar" style={{ backgroundColor: `var(--${difficulty})` }}>
            <span className="progress-bar--difficulty">{difficulty.toUpperCase()}</span>
            <span className="progress-bar--time">{timeLeft + "'"}</span>
            <div className="progess-bar--inner" style={{ width: `${barWidth}%` }}></div>
        </div>
    );
};

export default ProgressBar;
