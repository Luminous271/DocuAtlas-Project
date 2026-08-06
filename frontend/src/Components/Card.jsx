// https://placehold.co/150
function Card(card) {
    return(
        <div className="card">
            <img className="card-image" src ={card.image} alt="pic"></img>
            <h2 className="card-title">{card.title}</h2>
            <p className='card-text'>{card.text}.</p>
        </div>
    );
}

export default Card