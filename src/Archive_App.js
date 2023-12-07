import { useRef } from "react";
import { useState, useEffect } from "react"

export default function App() {
    let [count, setCount] = useState(0);
    let [second, setSecond] = useState(0);

    let inputRef = useRef();

    // useEffect(
    //     () => {
    //         setInterval(() => {
    //             setCount(count => count + 1)
    //         }, 1000);
    //     },
    //     []
    // )

    useEffect(() => console.log('Rendered without option!'))

    useEffect(() => console.log('Rendered null option!'), [])

    useEffect(() => console.log('Rendered count option!'), [count])

    let increase = () => {
        setCount(count => count + 1)
    }

    let decrease = () => {
        setSecond(second => second + 1)
    }

    let sample = () => {
        console.log(inputRef.current)
    }

    return (
        <>
            <h1>{count}</h1>
            <h1>{second}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>decrease</button>

            <input
                type="text"
                ref={inputRef}
            />

            <button onClick={sample}>Submit</button>
        </>
    )
}