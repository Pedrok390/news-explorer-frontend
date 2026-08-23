export default function NewsCard(props){

    const {card} = props
    const formattedDate = new Date(card.publishedAt).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return(
        <>
            <div className="newsCard">
                <div className="newsCard__image-container">
                    <img className="newsCard__image" src={card.urlToImage} alt={card.title} />
                </div>
                <div className="newsCard__container">
                    <p className="newsCard__date">{formattedDate}</p>
                    <h3 className="newsCard__title">{card.title}</h3>
                    <p className="newsCard__description">{card.description}</p>
                    <p className="newsCard__source">{card.source.name}</p>
                </div>
            </div>
        </>
    )
}