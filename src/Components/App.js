import React, { useState } from "react";
import Controls from "./Controls";
import UserCards from "./UserCards";

function App() {
    const [userCards, setUserCards] = useState([]);

    return (
        <div>
            <Controls setUserCards={setUserCards} />
            <UserCards userCards={userCards} />
        </div>
    );
}

export default App;
