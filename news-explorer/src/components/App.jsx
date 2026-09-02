import { useState, useEffect } from 'react'
import Main from './Main/Main.jsx'
import SavedNews from './SavedNews/SavedNews.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { api } from './../utils/mainApi.js'
import * as auth from './../utils/auth.js'
import CurrentUserContext from '../contexts/CurrentUserContext.jsx'
function App() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(
    Boolean(localStorage.getItem("jwt"))
  );
  const [popup, setPopup] = useState(null)
  const [headerBar, setHeaderBar] = useState(false)
  const [usercards, setUsercards] = useState([]);
  const handleOpenPopup = (popup) => {
    setPopup(popup)
  }
  const handleClosePopup = () => {
    setPopup(null)
  }
  const popupProps = {
    onOpenPopup: handleOpenPopup,
    onClosePopup: handleClosePopup,
    popup: popup,
    headerBar: headerBar,
    setHeaderBar: setHeaderBar,
  }
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      return;
    }

    auth.checkToken(jwt)
      .then(() => {
        setIsLoggedIn(true);
        api.setToken(jwt);
      })
      .catch(() => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsAuthChecking(false);
      });
  }, []);
  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
    api.getMyCards().then((cardData) => {
      setUsercards(cardData);
    });
  }, [isLoggedIn]);

  async function handleCardDelete(card) {
    await api.deleteCard(card._id).then(() => {
      setUsercards((state) => state.filter((currentCard) => currentCard._id !== card._id));
      handleClosePopup();
    });
  }
  const handleCardAdd = (data,keyword) => {
    api.addCard(data,keyword).then((newCard)  => {
      setUsercards([newCard,...usercards])
    })
    .catch((error) => console.error(error));
  }
  const handleRegister = (email, password, name) => {
    return auth.signup(email, password, name).then(() => {
      
      setPopup(null)
    })
  }
  const handleLogin = (email, password) => {
    auth.signin(email, password).then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        setPopup(null)
        api.setToken(data.token);
        setIsLoggedIn(true);
        navigate("/");
      }
    })
  };
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
  }
  return (
    <>
      <CurrentUserContext.Provider value={{currentUser, isLoggedIn, usercards}}>
          <div className='page'>
            <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onRegister={handleRegister} onLogout={handleLogout} popupProps={popupProps} currentUser={currentUser}/>
              <Routes>
                <Route path="/" element={
                    <Main isLoggedIn={isLoggedIn} onCardAdd={handleCardAdd} onCardDelete={handleCardDelete} />
                } />
                <Route path="/saved-news" element={
                  <ProtectedRoute isLoggedIn={isLoggedIn} isAuthChecking={isAuthChecking}>
                    <SavedNews onCardDelete={handleCardDelete} currentUser={currentUser} />
                  </ProtectedRoute>
                } />
              </Routes>
            <Footer />
          </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
