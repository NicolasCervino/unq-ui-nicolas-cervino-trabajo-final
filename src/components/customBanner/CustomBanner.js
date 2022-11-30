import "./custom-banner.css";

const CustomBanner = ({ children, bgColor, position }) => {
    return (
        <div className={`col-12 custom-banner ${position}`} style={{ backgroundColor: bgColor }}>
            {children}
        </div>
    );
};

export default CustomBanner;
