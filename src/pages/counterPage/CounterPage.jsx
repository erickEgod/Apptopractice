import React, { useEffect, useState } from 'react';
import './CounterPage.css';

export const CounterPage = ({ formState, setShow, availableNumbers, setAvailableNumbers}) => {
    const [count, setCount] = useState(1);
    const [showWinner, setShowWinner] = useState(false);
    
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [index, setIndex] = useState(null)

    useEffect(() => {
        if (count <= 0) {
            setIndex(Math.floor(Math.random() * availableNumbers.length)); 
            setSelectedNumber(availableNumbers[index])
            setShowWinner(true);
        }
        // Configura el temporizador de cuenta regresiva solo si count es mayor que 0
        else {
            const countdown = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [count, showWinner]);

    //botón regresar
    const onBack = () => {
        setShow(true)
        setAvailableNumbers(prevNumbers => prevNumbers.filter(number => number !== selectedNumber));
    };


    return (
        <div className="counter-container">
            {showWinner ? (
                <div className="winner-display">
                    <h1>GANADOR</h1>
                    <h2>{selectedNumber}</h2>
                    <p>Título: {formState?.titulo}</p>
                    <p>Premio: {formState?.premio}</p>
                    <button className="button-decorate" onClick={onBack}>Regresar</button>
                </div>
            ) : (
                <div className="circle">
                    <h1 className="count">{count}</h1>
                </div>
            )}
        </div>
    );
};
