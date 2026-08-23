import { Navigate, useNavigate } from 'react-router-dom'
import logoutIcon from '../../images/logout-icon.svg'
import logoutIconWhite from '../../images/logout-icon-white.svg'
import { NavLink } from 'react-router-dom'
import Popup from './components/Popup/Popup'
import Register from './components/Popup/components/Register/Register'
import Login from './components/Popup/components/Login/Login'
export default function Header(props) {
    const { isLoggedIn, onLogin, onLogout } = props;
    const { onOpenPopup, onClosePopup, popup } = props.popupProps;
    const navigate = useNavigate();

    let pageColor = ""
    if(location.pathname === '/'){
        pageColor = 'dark';
    }
    else{
        pageColor = 'clear';
    }
    const dynamicLogoutIcon = pageColor === "dark" ? logoutIconWhite : logoutIcon

    const registerPopup = {title: "Inscrever-se", children: <Register onOpenPopup={() => onOpenPopup(loginPopup)}/>}
    const loginPopup = {title: "Entrar", children: <Login onOpenPopup={() => onOpenPopup(registerPopup)} onLogin={onLogin}/>}
    return(
        <>
            <header className={`header header--${pageColor}`}>
                <div className="header__container">
                    <h1 className='header__title'>NewsExplorer</h1>
                    <div className="header__menu">
                        <NavLink to='/' className={({isActive}) => `header__button  ${isActive ? 'header__button--active' : ''}`} >Início</NavLink>
                        {isLoggedIn && (<NavLink to='/saved-news' className={({isActive}) => `header__button  ${isActive ? 'header__button--active' : ''}`} >Artigos Salvos</NavLink>)}
                        {!isLoggedIn ? (
                            <button className="header__button-login" onClick={() => onOpenPopup(loginPopup)}>Entrar</button>
                        ): (<button className="header__button-logout" onClick={onLogout}><p>Username</p><img className="header__logout-icon" src={dynamicLogoutIcon} alt="Logout"/></button>)}
                    </div>
                </div>
            </header>
            {popup && <Popup title={popup.title} children={popup.children} onClose={onClosePopup} />}
        </>
    )
}