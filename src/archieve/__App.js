import { useState } from "react";

function App() {
    let [inputValues, setInputValues] = useState({});

    let statesHandler = e => {
        let x = e.target.name;
        let y = e.target.value;

        setInputValues(prev => {
            return {
                ...prev,
                [x]: y
            }
        })
    }

    let formSubmit = e => {
        e.preventDefault();

        console.log(inputValues)
    }

    return (
        <form>
            <label>
                User name:
                <input type="text" name="username" onChange={statesHandler} />
            </label>
            <label>
                Password:
                <input type="text" name="password" onChange={statesHandler} />
            </label>
            <label>
                Age:
                <input type="number" name="age" onChange={statesHandler} />
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={statesHandler} />
            </label>

            <button onClick={formSubmit}>Submit</button>
        </form>
    )
}

export default App