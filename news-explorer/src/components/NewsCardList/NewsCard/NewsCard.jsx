import { useContext } from 'react';
import bookmarkImg from '../../../images/bookmark.png'
import bookmarkImgFull from '../../../images/bookmark-full.png'
import trashCanImg from '../../../images/trashcan.png'
import CurrentUserContext from '../../../contexts/CurrentUserContext';
export default function NewsCard(props){

    const {card, type, onCardAdd, onCardDelete, keyword} = props
    const {isLoggedIn, usercards} = useContext(CurrentUserContext)
    const formattedDate = new Date(card.publishedAt).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const savedCard = usercards.find((usercard) => usercard.url === card.url);
    const isSaved = Boolean(savedCard);
    
    const handleSaveCard = () => {
        onCardAdd(card, keyword)
    }
    const handleDeleteCard = () => {

        if(isSaved){
            onCardDelete(savedCard)
        }
    }
    return(
        <>
            <div className="newsCard">
                <div className="newsCard__image-container">
                    {type === 'saved' && <p className='newsCard__keyword'>{savedCard.keyword}</p>}
                    <img className="newsCard__image" src={card.urlToImage} alt={card.title} />
                    <div className="newsCard__bookmark">
                        {!isLoggedIn && 
                            <p className="newsCard__bookmark-text">{type === 'bookmark' ? 'Inscreva-se para salvar artigos' : 'Remover dos salvos'}</p>
                        }
                        {isSaved ? 
                        <button className="newsCard__bookmark-image-container" onClick={handleDeleteCard}>
                            <img className="newsCard__bookmark-image" src={type === 'bookmark' ? bookmarkImgFull: trashCanImg }/>
                        </button> 
                        :
                        <button className="newsCard__bookmark-image-container" onClick={handleSaveCard}>
                            <img className="newsCard__bookmark-image" src={type === 'bookmark' ? bookmarkImg: trashCanImg }/>
                        </button>
                        }
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