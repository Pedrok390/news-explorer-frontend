import { useState } from "react"
import Register from "../Register/Register"
export default function Login(props) {
    const {onOpenPopup, onLogin, onRegister} = props
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
        return "O campo de e-mail é obrigatório.";
        }

        if (!emailRegex.test(email)) {
        return "Digite um endereço de e-mail válido.";
        }

        return "";
    };

    const validatePassword = (password) => {
        if (!password) {
            return "O campo de senha é obrigatório.";
        }
        if(password.length < 8){
            return "A senha precisa ter 8 dígitos ou mais";
        }

        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "email") {
            setErrors((prev) => ({
                ...prev,
                email: validateEmail(value),
            }));
        }

        if (name === "password") {
            setErrors((prev) => ({
                ...prev,
                password: validatePassword(value),
            }));
        }
    };

    const isFormValid = form.email && form.password && !validateEmail(form.email) &&!validatePassword(form.password);

    const registerPopup = {title: "Inscrever-se", children: <Register onOpenPopup={onOpenPopup} onLogin={onLogin} onRegister={onRegister} />}
    const handleSubmit = (e) => {
        e.preventDefault()

        onLogin(form.email, form.password);
    }
    return (
        <>
            <form className="popup__form" onSubmit={handleSubmit}>
                <div className="popup__form-container">
                    <label className="popup__form-label">E-mail</label>
                    <input className="popup__form-input" name="email" value={form.email} onChange={handleChange} type="email" placeholder="Insira o e-mail" />
                    {errors.email && (<p className="popup__error">{errors.email}</p>)}
                </div>
                <div className="popup__form-container">
                    <label className="popup__form-label">Senha</label>
                    <input className="popup__form-input" name="password" value={form.password} onChange={handleChange} type="password" placeholder="Insira a senha" />
                    {errors.password && (<p className="popup__error">{errors.password}</p>)}
                </div>

                <input className={`popup__form-submit ${isFormValid && 'popup__form--valid'}`} type="submit" value='Entrar' disabled={!isFormValid}/>
            </form>
            <p className="popup__form-subscribe">ou <button className="popup__form-link" onClick={() => onOpenPopup(registerPopup)}>Inscreva-se</button></p>
        </>
    )
}