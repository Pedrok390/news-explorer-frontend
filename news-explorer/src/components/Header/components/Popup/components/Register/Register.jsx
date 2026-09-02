import { useState } from "react"
import Login from "../Login/Login"
export default function Register(props) {
    const {onOpenPopup, onLogin, onRegister} = props
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: '',
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        name: '',
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
    const validateName = (name) => {
        if(!name){
            return "O campo de nome de usuário é obrigatorio"
        }
    }

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
        if (name === "name") {
            setErrors((prev) => ({
                ...prev,
                name: validateName(value),
            }));
        }
    };

    const isFormValid = form.email && form.password && form.name && !validateEmail(form.email) && !validatePassword(form.password) && !validateName(form.name);

    const handleSubmit = (e) => {
        e.preventDefault()

        onRegister(form.email, form.password, form.name);
    }
    const loginPopup = {title: "Entrar", children: <Login onOpenPopup={onOpenPopup} onLogin={onLogin} onRegister={onRegister} />}
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
                <div className="popup__form-container">
                    <label className="popup__form-label">Nome de Usuário</label>
                    <input className="popup__form-input" name="name" value={form.name} onChange={handleChange} type="name" placeholder="Insira um nome" />
                    {errors.name && (<p className="popup__error">{errors.name}</p>)}
                </div>

                <input className={`popup__form-submit ${isFormValid && 'popup__form--valid'}`} type="submit" value='Inscrever-se' disabled={!isFormValid}/>
            </form>
            <p className="popup__form-subscribe">ou <button className="popup__form-link" onClick={() => onOpenPopup(loginPopup)}>Entre</button></p>
        </>
    )
}