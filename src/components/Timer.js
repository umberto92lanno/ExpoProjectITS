import React from 'react';
import { Text } from 'react-native';
function msToHMS( ms ) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    const hours = parseInt( seconds / 3600 ).toString(); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt( seconds / 60 ).toString(); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = (seconds % 60).toString();
    const hoursFormatted = hours.length === 1 ? '0' + hours : hours;
    const minutesFormatted = minutes.length === 1 ? '0' + minutes : minutes;
    const secondsFormatted = seconds.length === 1 ? '0' + seconds : seconds;
    return hoursFormatted + ":" + minutesFormatted + ":" + secondsFormatted;
}
const Timer = ({ timer, formatted }) => {
    return (
        <Text style={{ fontSize: 30 }}>{formatted ? msToHMS(timer * 1000) : timer}</Text>
    );
};

export default Timer;