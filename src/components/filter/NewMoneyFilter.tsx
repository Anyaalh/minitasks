import {useState} from "react";

type NewMoneyFilterType = "Dollars" | "RUBLS" | "all"

export function NewMoneyFilter() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    let [filter, setFilter] = useState<NewMoneyFilterType>('all')

    let currentMoney = money
    if (filter === "Dollars"){
        currentMoney = money.filter((newMoney) => newMoney.banknots==="Dollars")
    }
    if (filter === "RUBLS"){
        currentMoney = money.filter((newMoney)=>newMoney.banknots==="RUBLS")
    }


    const onClickHandler = (name: NewMoneyFilterType) => {
        setFilter(name)
    }

    return (
        <>
            <ul>
                {currentMoney.map(t => {
                        return (
                            <li>
                                <span>{t.banknots}</span>
                                <span> {t.value}</span>
                                <span> {t.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <button onClick={() => onClickHandler("all")}>All</button>
            <button onClick={() => onClickHandler("Dollars")}>Doll</button>
            <button onClick={() => onClickHandler("RUBLS")}>Rub</button>
        </>
    )
}