import { useState } from "react"
import Register from "../Register/Register"
export default function Login(props) {
    const {onOpenPopup, onLogin} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerPopup = {title: "Inscrever-se", children: <Register onOpenPopup={onOpenPopup} onLogin={onLogin} />}
    const handleSubmit = (e) => {
        e.preventDefault()

        onLogin();
    }
    return (
        <>
            <form className="popup__form" onSubmit={handleSubmit}>
                <label className="popup__form-label">E-mail</label>
                <input className="popup__form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Insira o e-mail" />
                <label className="popup__form-label">Senha</label>
                <input className="popup__form-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Insira a senha" />
                <input className="popup__form-submit" type="submit" value='Entrar' />
            </form>
            <p className="popup__form-subscribe">ou <button className="popup__form-link" onClick={() => onOpenPopup(registerPopup)}>Inscreva-se</button></p>
        </>
    )
}