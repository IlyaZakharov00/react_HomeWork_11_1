type TFact = {
    fact: string;
}

export const FactItem = (props: TFact) => {
    const factText = props.fact
    return (
        <li className='item-fact'>{factText}</li>
    )
}
