import {MouseEvent, useState} from "react";
import {FullInput} from "./FullInput";

export function Input() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'}
        ]
    )
    const addMessage = (title: string) => {
       let newMess = {message: title}
        setMessage([newMess, ...message])
    }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}