import { useState } from "react";

export default function Contacts() {
    let [counter, setCounter] = useState(0);

    return (
        <>

            <h2>The counter is {counter}</h2>

            <button onClick={() => setCounter(counter + 1)}>+ Increase</button>
        </>
    )
}