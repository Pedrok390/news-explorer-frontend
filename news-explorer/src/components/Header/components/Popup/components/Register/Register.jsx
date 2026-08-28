import { useState } from "react"
import Login from "../Login/Login"
export default function Register(props) {
    const {onOpenPopup, onLogin} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const loginPopup = {title: "Entrar", children: <Login onOpenPopup={onOpenPopup} onLogin={onLogin} />}
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form className="popup__form" onSubmit={handleSubmit}>
                <label className="popup__form-label">E-mail</label>
                <input className="popup__form-input" value={email} type="email" placeholder="Insira o e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <label className="popup__form-label">Senha</label>
                <input className="popup__form-input" value={password} type="password" placeholder="Insira a senha" onChange={(e) => setPassword(e.target.value)}/>
                <label className="popup__form-label">Nome de Usuário</label>
                <input className="popup__form-input" value={username} type="text" placeholder="Insira seu nome de usuário" onChange={(e) => setUsername(e.target.value)}/>
                <input className="popup__form-submit" type="submit" value='Inscrever-se' />
            </form>
            <p className="popup__form-subscribe">ou <button className="popup__form-link" onClick={() => onOpenPopup(loginPopup)}>Entre</button></p>
        </>
    )
}