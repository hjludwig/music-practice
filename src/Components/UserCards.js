import React from "react";

const UserCards = ({ userCards }) => {
    return (
        <div>
            <ul>
                {userCards.map(card => (
                    <li>{card.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserCards;
