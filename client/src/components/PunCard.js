import './style.css'

const PunCard = ({pun}) => {
    const data = JSON.parse(pun)
    return (
        <div className='card my-4 pun-card text-center d-flex justify-content-center align-content-center'>
            <h3>{data.pun}</h3>
            <p>{data.name}</p>
        </div>
    )
}

export default PunCard;
