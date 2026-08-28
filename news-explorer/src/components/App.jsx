import { useState } from 'react'
import Main from './Main/Main.jsx'
import SavedNews from './SavedNews/SavedNews.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [popup, setPopup] = useState(null)
  const [headerBar, setHeaderBar] = useState(false)

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

  const handleLogin = () => {
    setIsLoggedIn(true)
    handleClosePopup();
    setHeaderBar(false)
  }
  const handleLogout = () => {
    navigate("/")
    setIsLoggedIn(false)
  }
  return (
    <>
        <div className='page'>
          <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} popupProps={popupProps}/>
            <Routes>
              <Route path="/" element={
                  <Main isLoggedIn={isLoggedIn} />
              } />
              <Route path="/saved-news" element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews />
                </ProtectedRoute>
              } />
            </Routes>
          <Footer />
        </div>
    </>
  )
}

export default App
