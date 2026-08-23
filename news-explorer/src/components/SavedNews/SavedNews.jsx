import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SavedNewsHeader from "../SavedNews/SavedNewsHeader/SavedNewsHeader"

export default function SavedNews(props) {
    const { isLoggedIn, onLogin, onLogout } = props
    return(
        <>
            <SavedNewsHeader />
        </>
    )
}