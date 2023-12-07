import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Gallery from './pages/Gallery'


function App() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
            </Route>
        </Routes>
    )

}

export default App