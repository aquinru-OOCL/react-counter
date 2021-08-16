import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';
import { useState } from "react";
import "../styles/MultipleCounter.css";

function MultipleCounter() {

    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize) {
        setCounterSize(counterSize);
    }

    return (
        <div className="multipleCounter">
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    );
}

export default MultipleCounter;