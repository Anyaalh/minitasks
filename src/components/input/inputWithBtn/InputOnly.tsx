import {ChangeEvent} from "react";

type InputOnlyType = {
    title: string
    setTitle: (title: string)=> void
}

export function InputOnly({title, setTitle}: InputOnlyType) {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    )
}