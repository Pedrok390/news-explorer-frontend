import { useContext } from "react";
import NewsCard from "./NewsCard/NewsCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function NewsCardList(props){

    const { cards, visibleCards, setVisibleCards, type, onCardAdd, onCardDelete, keyword} = props
    const {isLoggedIn} = useContext(CurrentUserContext)
    return(
        <>
            <div className="newsCardList">
                {cards && cards.slice(0, visibleCards).map((card, i) => (
                    <NewsCard 
                        isLoggedIn={isLoggedIn}  
                        type={type} 
                        key={i} 
                        card={card} 
                        onCardAdd={onCardAdd}
                        onCardDelete={onCardDelete}
                        keyword={keyword} />
                ))}
            </div>
            {visibleCards < cards.length && 
                <button className="newsCard__show" onClick={() => setVisibleCards((prev) => prev + 6)}>Mostrar mais</button>
            }
        </>
    )
}