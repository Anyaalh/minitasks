import {useState} from "react";
import {NewComponentOfFilter} from "./NewComponentOfFilter";

export type FilterType = "all"|"dollar"|"ruble"
export function Filter() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    let [filter, setFilter] = useState<FilterType>("all")

    let currentMoney= money
    if (filter==="ruble") {
       currentMoney = money.filter((filteredMoney)=>filteredMoney.banknote==="ruble")
    }
    if (filter==="dollar") {
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknote==="dollar")
    }



    const onClickHandler = (name:FilterType) =>{
        setFilter(name)
    }

    return (
        <NewComponentOfFilter currentMoney={currentMoney} onClickHandler={onClickHandler}/>
        // <>
        //     <ul>
        //         {currentMoney.map((objFromMoneyArray, index)=>{
        //             return(
        //                 <li key={index}>
        //                     <span>{objFromMoneyArray.number}</span>
        //                     <span> {objFromMoneyArray.nominal}</span>
        //                     <span> {objFromMoneyArray.banknote}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //
        //     <button onClick={()=>onClickHandler("all")}>all</button>
        //     <button onClick={()=>onClickHandler("ruble")}>ruble</button>
        //     <button onClick={()=>onClickHandler("dollar")}>dollar</button>
        // </>

    )
}