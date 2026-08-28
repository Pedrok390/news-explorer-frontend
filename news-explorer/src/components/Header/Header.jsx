import logoutIconImg from '../../images/logout-icon.svg'
import logoutIconWhiteImg from '../../images/logout-icon-white.svg'
import { NavLink } from 'react-router-dom'
import Popup from './components/Popup/Popup'
import Login from './components/Popup/components/Login/Login'
export default function Header(props) {
    const { isLoggedIn, onLogin, onLogout } = props;
    const { onOpenPopup, onClosePopup, popup, headerBar, setHeaderBar } = props.popupProps;
    const logoutIcon = location.pathname === '/' ? 'dark' : 'clear'
    const onOpenHeaderBar = () => {
        setHeaderBar(true)
    }
    const onCloseHeaderBar = () => {
        setHeaderBar(false)
    }

    const loginPopup = {title: "Entrar", children: <Login onLogin={onLogin} onOpenPopup={onOpenPopup}/>}
    return(
        <>
            <header className={`header header--mobile header--${logoutIcon}`}>
                <div className="header__container">
                    <h1 className='header__title'>NewsExplorer</h1>
                    <div className="header__menu">
                        <button className='header__button' onClick={onOpenHeaderBar}>=</button>
                    </div>
                </div>
            </header>
            <header className={`header header--desktop header--${logoutIcon}`}>
                <div className="header__container">
                    <h1 className='header__title'>NewsExplorer</h1>
                    <div className="header__menu">
                        <NavLink to='/' className={({isActive}) => `header__button  ${isActive ? 'header__button--active' : ''}`} >Início</NavLink>
                        {isLoggedIn && (
                            <NavLink to='/saved-news' className={({isActive}) => `header__button  ${isActive ? 'header__button--active' : ''}`} >Artigos Salvos</NavLink>
                        )}
                        {!isLoggedIn ? (
                            <button className="header__button-login" onClick={() => onOpenPopup(loginPopup)}>Entrar</button>
                            ): (
                            <button className="header__button-logout" onClick={onLogout}>
                                <p>Username</p>
                                <img className="header__logout-icon" src={logoutIcon === 'dark' ? logoutIconWhiteImg : logoutIconImg} alt="Logout"/>
                            </button>
                        )}
                    </div>
                </div>
            </header>
            {headerBar && 
                <div className='headerbar__background'>
                    <div className='headerbar'>
                        <div className='headerbar__container'>
                            <h1 className='headerbar__title'>NewsExplorer</h1>
                            <button className='headerbar__close' onClick={onCloseHeaderBar}>X</button>
                        </div>
                        <NavLink to='/' className={({isActive}) => `headerbar__button  ${isActive ? 'headerbar__button--active' : ''}`} >Início</NavLink>
                        {isLoggedIn && (
                            <NavLink to='/saved-news' className={({isActive}) => `headerbar__button  ${isActive ? 'headerbar__button--active' : ''}`} >Artigos Salvos</NavLink>
                        )}
                        {!isLoggedIn ? (
                            <button className="headerbar__button-login" onClick={() => onOpenPopup(loginPopup)}>Entrar</button>
                        ): (
                            <button className="headerbar__button-logout" onClick={onLogout}>
                                <p>Username</p>
                                <img className="headerba__logout-icon" src={logoutIconWhiteImg} alt="Logout"/>
                            </button>
                        )}
                    </div>
                </div> 
            }
            {popup && 
                <Popup title={popup.title} children={popup.children} onClose={onClosePopup} />
            }
        </>
    )
}