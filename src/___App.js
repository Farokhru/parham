import { useState } from "react"

let initialTodo = [
    { id: 1, text: "Task 1", status: false },
    { id: 2, text: "Task 2", status: true },
]

export default function App() {
    let [todos, setTodos] = useState(initialTodo)



    let changeStatus = targetId => {
        todos.map(item => {
            if (item.id === targetId) {
                setTodos(prevTodos => {
                    return [
                        ...prevTodos,
                        {
                            id: targetId,
                            status: false,
                            text: item.text
                        }
                    ]
                })
            }
        })
    }

    return (
        <>
            {
                todos.map((item, index) => {
                    return (
                        <div key={index}>
                            <label >
                                <input type="checkbox"
                                    onChange={() => changeStatus(item.id)}
                                    checked={item.status} />
                                {item.text}
                            </label>
                        </div>
                    )
                })
            }
        </>
    )
}