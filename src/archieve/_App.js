import { useState } from "react";


function App() {
    let [username, setUserName] = useState("ali");
    let [password, setPassword] = useState("");


    let formHandler = e => {
        e.preventDefault();
        console.log(username, password)
    }

    return (
        <form>
            <label>
                User name:
                <input type="text" onChange={e => setUserName(e.target.value)}
                    value={username} />
            </label>
            <label>
                Password:
                <input type="text" onChange={e => setPassword(e.target.value)}
                    value={password} />
            </label>

            <button onClick={formHandler}>Submit</button>
        </form>
    )
}

export default App