import {useState} from "react";

export function UseState() {

    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler2 = () => {
        setA(0)
        console.log(a)
    }

    return (
        <>
            <h2>{a}</h2>
            <button onClick={onClickHandler}>add 1</button>
            <button onClick={onClickHandler2}>0</button>
        </>
    )
}