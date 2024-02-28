import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./components/NewComponent";
import {FullButton} from "./components/button/FullButton";
import {UniversalButton} from "./components/button/UniversalButton";
import {UseState} from "./components/UseState";
import {Filter} from "./components/filter/Filter";
import {NewMoneyFilter} from "./components/filter/NewMoneyFilter";


function App() {

    const student = [
        {id: 1, name: "Vasya", age: 18},
        {id: 2, name: "Asya", age: 12},
        {id: 3, name: "Ann", age: 11},
        {id: 4, name: "Masha", age: 158},
        {id: 5, name: "Ira", age: 18},
        {id: 6, name: "Vera", age: 1},
    ]

    const button1Foo = (name: string, age: number) => {
        console.log(name, age)
    }
    const button2Foo = (name: string, age: number) => {
        console.log(name, age)
    }
    const button3Foo = () => {
        console.log("I am stupid button")
    }
    return (
        <>
            {/*<Header title={"new header"}/>*/}
            {/*<Body/>*/}
            {/*<Footer/>*/}
            {/*<NewComponent student={student}/>*/}
            {/*<FullButton/>*/}
            {/*<UniversalButton callBack={()=>button1Foo("Ann", 21)} name={"Button 1"}/>*/}
            {/*<UniversalButton callBack={()=>button2Foo("Ann2", 22)} name={"Button 2"}/>*/}
            {/*<UniversalButton name={"Stupid button"} callBack={button3Foo}/>*/}
            {/*<UseState/>*/}
            {/*<Filter/>*/}
            <NewMoneyFilter/>
        </>
    )
}

export default App;
