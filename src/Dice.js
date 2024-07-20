import React from 'react';

export default function Dice(props) {
    const {result, setter } = props;

    function GenerateRandom() {
        const randomNum = Math.random();

        if (randomNum < 0.5) {
            if (randomNum < 0.1667) {
                setter(1);
            } else if (randomNum < 0.3334) {
                setter(3);
            } else {
                setter(5);
            }
        } else {
            if (randomNum > 0.6667) {
                setter(2);
            } else if (randomNum > 0.8334) {
                setter(4);
            } else {
                setter(6);
            }
        }
    }
    return (
        <div>
            <p>Congrats, you have rolled a {result}</p>
            <button onClick={GenerateRandom}>Click here to Roll!</button>
        </div>
    )
}