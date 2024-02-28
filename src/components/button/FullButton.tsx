import { MouseEvent } from 'react';

export function FullButton() {

    const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Ann")
    }

    const secondName = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("SecondName")
    }

    const onClickHandler = (name:string) => {
        console.log(name)
    }

    const foo1 = (event: MouseEvent<HTMLButtonElement>)=>{
        console.log(100200)
    }

    const foo2 = (num: number) =>{
        console.log(num)
    }
    return (
        <>
            <button onClick={(event) => console.log("Hello")}>My YouTubeChannel-1</button>
            <button onClick={myFirstSubscriber}>My YouTubeChannel-2</button>
            <button onClick={secondName}>My button-3</button>
            <button onClick={e=>onClickHandler("Anya")}>My button-4</button>

            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </>
    )
}