import React, { FC } from "react";
import "./ImageCart1.css";

interface ImageCart1Props {
    src: string;
    text: string;
}

const ImageCart1: FC<ImageCart1Props> = ({ src, text }) => {
    return (
        <div className="imagecontainer">
            <img src={src} className="image" alt="Imagem" />
            <p className="text">{text}</p>
        </div>
    );
};

export default ImageCart1;
