import { useState } from "react"

export default function Login(props) {
    const {onOpenPopup, onLogin} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        onLogin();
    }
    return (
        <>
            <form className="popup__form" onSubmit={handleSubmit}>
                <label className="popup__form-label">E-mail</label>
                <input className="popup__form-input" value={email} onChange={handleSetEmail} type="email" placeholder="Insira o e-mail" readOnly />
                <label className="popup__form-label">Senha</label>
                <input className="popup__form-input" value={password} onChange={handleSetPassword} type="password" placeholder="Insira a senha" readOnly/>
                <input className="popup__form-submit" type="submit" value='Entrar' />
            </form>
            <p className="popup__form-subscribe">ou <button className="popup__form-link" onClick={onOpenPopup}>Inscreva-se</button></p>
        </>
    )
}