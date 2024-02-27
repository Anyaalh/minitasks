import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./components/NewComponent";


function App() {

    const student = [
        {id:1, name: "Vasya", age: 18},
        {id:2, name: "Asya", age: 12},
        {id:3, name: "Ann", age: 11},
        {id:4, name: "Masha", age: 158},
        {id:5, name: "Ira", age: 18},
        {id:6, name: "Vera", age: 1},
    ]

    return (
        <>
            <Header title={"new header"}/>
            <Body/>
            <Footer/>
            <NewComponent student={student}/>
        </>
    )
}

export default App;
