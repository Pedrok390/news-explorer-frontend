import NewsCard from "./NewsCard/NewsCard";

export default function NewsCardList(props){

    const { cards, visibleCards, setVisibleCards, type, isLoggedIn} = props
    console.log(cards)
    return(
        <>
            <div className="newsCardList">
                {cards && cards.slice(0, visibleCards).map((card, i) => (
                    <NewsCard isLoggedIn={isLoggedIn}  type={type} key={i} card={card} />
                ))}
            </div>
            {visibleCards < cards.length && 
                <button className="newsCard__show" onClick={() => setVisibleCards((prev) => prev + 6)}>Mostrar mais</button>
            }
        </>
    )
}