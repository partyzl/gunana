const PunCard = ({pun}) => {
    const data = JSON.parse(pun)
    return (
        <div className='card'>
            <h3>{data.pun}</h3>
            <p>{data.name}</p>
        </div>
    )
}

export default PunCard;
