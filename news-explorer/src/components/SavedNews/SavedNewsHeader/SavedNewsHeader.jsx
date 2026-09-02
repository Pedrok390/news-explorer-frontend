import { useContext } from "react"
import CurrentUserContext from "../../../contexts/CurrentUserContext"

export default function SavedNewsHeader(){
    const {currentUser, usercards} = useContext(CurrentUserContext)
    const keywordList = [...new Set(usercards.map((usercard) => usercard.keyword))]
    if(keywordList < 2){

    }
    return(
        <>
            <div className="savedNews">
                <h3 className="savedNews__subtitle">Artigos Salvos</h3>
                <h2 className="savedNews__title">{currentUser.name}, você tem {usercards.length} artigos salvos</h2>
                <p className="savedNews__keywords">Por palavras-chave: {keywordList.length <= 2 ? (
                    keywordList.map((keyword)=> <span>{index !== 1 ? (keyword + ', ') : (keyword + '.') }</span> )
                ) : (<>
                        {keywordList.slice(0,2).map((keyword, index) => <span>{keyword + ', '}</span>)}
                        <span>e {keywordList.length - 2} outros</span>
                    </>)}
                </p>
            </div>
        </>
    )
}