import {useEffect, useState} from 'react';

function Clock() {
    let [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    };

    useEffect(() => {
        let timerId = setInterval(refreshClock, 1000);

        return function cleanup() {
            clearInterval(timerId);
        };
    },[]);

    return (
        <span>
            {date.toLocaleTimeString()}
        </span>
    );
}

export default Clock;