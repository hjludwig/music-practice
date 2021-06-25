import React, { useState } from "react";
import { rhythm, solfege } from "../data";
import Card from "./Card";

const Controls = ({ setUserCards }) => {
    const [cards, setCards] = useState(rhythm);
    const handleClick = card => {
        setUserCards(prevState => [...prevState, card]);
    };
    return (
        <div>
            <button type="button" onClick={() => setCards(solfege)}>
                Solfege
            </button>
            <button type="button" onClick={() => setCards(rhythm)}>
                Rhythm
            </button>
            <button type="type" onClick={() => setUserCards([])}>
                Clear
            </button>
            <ul>
                {cards.map(card => (
                    <Card card={card} handleClick={handleClick} />
                ))}
            </ul>
        </div>
    );
};

export default Controls;
