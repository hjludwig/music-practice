import React from "react";

const Card = ({ card, handleClick }) => {
    const { name, image } = card;
    return (
        <div onClick={() => handleClick(card)}>
            <p>{name}</p>
            <img alt={name} src={image} className="w-48" />
        </div>
    );
};

export default Card;
