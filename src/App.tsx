import React from "react";
import "./App.css"
import {Routes,Route} from 'react-router-dom';
import {Register} from "./components/Register/Register"
import {Login} from "./components/Login/Login";
import {Launches} from "./components/Launches/Launches";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="register/" element={<Register/>}/>
                <Route path="login/" element={<Login/>}/>
                <Route path="launches/" element={<Launches/>}/>
            </Routes>
        </>
    )
}
