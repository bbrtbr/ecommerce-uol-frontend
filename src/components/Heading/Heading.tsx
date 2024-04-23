import React, { FC } from "react";
import "./Heading.css";

interface HeadingProps {
    text: string;
}

const Heading: FC<HeadingProps> = ({ text }) => {
    return <div className="container">
        {text}
    </div>;
};

export default Heading;
