import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
    return(
        <div>
            <p><Link to="/"></Link></p>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </div>

    );
}

export default App;
