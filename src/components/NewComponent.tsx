type NewComponentType = {
    student: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export function NewComponent(props: NewComponentType) {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>{props.student.map(t => {
                return (
                    <li key={t.id}>
                        <span>Name:{t.name}</span>
                        <span> Age:{t.age}</span>
                    </li>
                )
            })}
            </ul>

            <ul>
                {topCars.map((t, index)=> {
                    return(
                        <li key={index}>
                            <span>manufacturer: {t.manufacturer}</span>
                            <span> model: {t.model}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )

}