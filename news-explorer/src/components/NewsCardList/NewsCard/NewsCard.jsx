import bookmarkImg from '../../../images/bookmark.png'
import trashCanImg from '../../../images/trashcan.png'
export default function NewsCard(props){

    const {card, type, isLoggedIn} = props
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
                    <div className="newsCard__bookmark">
                        {!isLoggedIn && 
                            <p className="newsCard__bookmark-text">{type === 'bookmark' ? 'Inscreva-se para salvar artigos' : 'Remover dos salvos'}</p>
                        }
                        <button className="newsCard__bookmark-image-container">
                            <img className="newsCard__bookmark-image" src={type === 'bookmark' ? bookmarkImg: trashCanImg }/>
                        </button>
                    </div>
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