type UniversalButton = {
    name: string
    callBack:()=>void
}

export function UniversalButton(props: UniversalButton) {

    const onclickHandler = () => {
        props.callBack()
    }

    return(
        <button onClick={onclickHandler}>{props.name}</button>
    )
}