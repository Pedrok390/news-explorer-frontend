
import SavedNewsHeader from "../SavedNews/SavedNewsHeader/SavedNewsHeader"
import NewsCardList from "../NewsCardList/NewsCardList"
import { useContext } from "react"
import CurrentUserContext from "../../contexts/CurrentUserContext"

export default function SavedNews(props) {
    const {onCardDelete} = props
    const { usercards, isLoggedIn, } = useContext(CurrentUserContext)
    return(
        <>
            <SavedNewsHeader />
            <div className="savedNews__container">
                <NewsCardList 
                    cards={usercards} 
                    type='saved' 
                    isLoggedIn={isLoggedIn}
                    onCardDelete={onCardDelete}
                />
            </div>
        </>
    )
}