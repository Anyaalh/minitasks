import {ChangeEvent, MouseEvent, useState} from "react";

type FullInputType = {
    addMessage: (title: string) => void
}

export function FullInput({addMessage}: FullInputType) {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    )
}