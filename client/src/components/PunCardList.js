import { default as PunCard } from './PunCard'

const PunCardList = ({puns}) => {
    return (
        <ul>
            {
                puns.map(pun => {
                    return <PunCard pun={pun}/>
                })
            }
        </ul>
    )
}

export default PunCardList;
