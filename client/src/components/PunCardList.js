import { default as PunCard } from './PunCard'

const PunCardList = ({puns}) => {
    return (
        <ul className="d-flex flex-row justify-content-center align-content-center">
        <div style={{width: '600px'}}>
            {
                puns.length > 0 ? puns.map(pun => {
                    return <PunCard pun={pun}/> }) : null
            }
        </div>
        </ul>
    )
}

export default PunCardList;
