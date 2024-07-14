import React, { useState } from 'react'
import './FactAboutStarWars.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeInput } from '../../store/slices/countFactSlice'
import { factsData } from './FactsData'
import { FactItem } from './FactItem/FactItem'

export const FactsAboutStarWars = () => {

    const [error, setError] = useState(false)
    const { count } = useSelector((state: any) => state.counterFacts);
    const dispatch = useDispatch()

    const hendlerChange = (e: React.FormEvent) => {
        const input = e.target as HTMLInputElement
        const inputeValue = Number(input.value)
        if (inputeValue < 1 || inputeValue > 5) {
            setError(true)
            dispatch(changeInput(inputeValue))
        } else {
            setError(false)
            dispatch(changeInput(inputeValue))
        }
    }

    return (<>
        <div className="factStarWars-container">
            <span>Показать</span>
            <input type="number" min={0} max={5} className="input-count-facts" onChange={hendlerChange}></input>
            <span>фактов о Star Wars</span>
        </div>
        {error ? <div>Введенное число фактов должно быть от 1 до 5</div> :
            <ul className='facts-list'>{
                factsData.map((item, index) => {
                    if (count >= index + 1) {
                        return (<FactItem fact={item} key={index} />)
                    }
                })}
            </ul>
        }
    </>
    )
}
