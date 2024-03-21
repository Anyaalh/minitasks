type ButtonForInputTYpe = {
    title: string
    callBack: ()=> void
}
export function ButtonForInput(props: ButtonForInputTYpe) {

const onClickButtonHandler = () => {
    props.callBack()
}

    return (
            <button onClick={onClickButtonHandler}>{props.title}</button>
    )
}