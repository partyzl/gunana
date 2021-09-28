const PunCard = ({pun}) => {
    return (
        <div className='card'>
        <p>{pun}</p>
            <h3>{pun.pun}</h3>
            <p>{pun.name}</p>
        </div>
    )
}

export default PunCard;
