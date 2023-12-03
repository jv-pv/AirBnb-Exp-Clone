
const Card = (props) => {
    return (
    <div className="card">
        <img src={`public/images/${props.coverImg}`} className="card--image" />
        <div className="card--stats">
            <img src="public/images/star.png" className="card--star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
    )
}

export default Card