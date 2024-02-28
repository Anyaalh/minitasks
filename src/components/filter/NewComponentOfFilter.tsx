import {FilterType} from "./Filter";

type NewComponentOfFilter = {
    currentMoney: Array<MoneyType>
    onClickHandler: (name: FilterType)=> void
}

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

export const NewComponentOfFilter = (props:NewComponentOfFilter) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArray, index)=>{
                        return(
                            <li key={index}>
                                <span>{objFromMoneyArray.number}</span>
                                <span> {objFromMoneyArray.nominal}</span>
                                <span> {objFromMoneyArray.banknote}</span>
                                </li>
                        )
                    })}
        </ul>

        <button onClick={()=>props.onClickHandler("all")}>all</button>
    <button onClick={()=>props.onClickHandler("ruble")}>ruble</button>
    <button onClick={()=>props.onClickHandler("dollar")}>dollar</button>
    </>

)
}