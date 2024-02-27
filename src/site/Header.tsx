type HeaderType = {
    title: string
}

export function Header (props: HeaderType) {
    return (
        <div>{props.title}</div>
    )
}