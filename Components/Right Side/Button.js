import React, { useState } from "react";

let Button = props => {
    let [theme, setTheme] = useState('light');
    return (
        <div>
            <button type="button">Change Theme</button>
        </div>
    )
};

export default Button;