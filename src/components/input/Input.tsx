import {MouseEvent, useState} from "react";
import {FullInput} from "./FullInput";
import {InputOnly} from "./inputWithBtn/InputOnly";
import {ButtonForInput} from "./inputWithBtn/ButtonForInput";

export function Input() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'}
        ]
    )
    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
       let newMess = {message: title}
        setMessage([newMess, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}

            <InputOnly title={title} setTitle={setTitle}/>
            <ButtonForInput title={"+"} callBack={callBackButtonHandler}/>


            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}