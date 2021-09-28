import { default as PunCard } from './PunCard'

const PunCardList = ({puns}) => {
    return (
        <ul>
            {
                puns.length > 0 ? puns.map(pun => {
                    return <PunCard pun={pun}/> }) : null
            }
        </ul>
    )
}

export default PunCardList;
