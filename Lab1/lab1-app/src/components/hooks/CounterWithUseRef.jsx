import React, {useState, useRef, use} from 'react'

function CounterWithUseRef() {
    const [count, setCount] = useState(0);
    const buttonClickRef = useRef(0);
    let clickCount = 0;

    const increment = () => {
        setCount(count + 1);
        buttonClickRef.current += 1;
        clickCount += 1;
        console.log("Count:", count);
        console.log("Button clicked Ref: ", buttonClickRef.current);
        console.log("Click count:", clickCount);
    }

    const decrement = () => {
        setCount(count - 1);
        buttonClickRef.current += 1;
        clickCount += 1;
        console.log("Count:", count);
        console.log("Button clicked Ref:", buttonClickRef.current);
        console.log("Click count:", clickCount);
    }

    return (
        <div>
            <h2>Counter With useState</h2>
            <p>Count: {count}</p>
            <p>Button clicked: {buttonClickRef.current} times</p>
            <p>Click count (variable): {clickCount} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterWithUseRef