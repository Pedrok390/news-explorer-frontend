import { useState } from "react";

export default function SearchForm(props) {
    const {onSearch} = props
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

        onSearch(search)

    }
    return (
        <>
            <div className="search-form">
                <div className="search-form__intro">
                    <h2 className="search-form__title">O que está acontecendo no mundo?</h2>
                    <p className="search-form__description">Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
                </div>
                <form className="search-form__search" onSubmit={handleSubmit}>
                    <input className="search-form__bar" 
                            type="text" name="search" 
                            id="search" 
                            placeholder="Inserir tema" 
                            onChange={(e) => {setSearch(e.target.value)}}>
                    </input>
                    <input className="search-form__button" type="submit" value="Procurar"/>
                </form>
            </div>
        </>
    )
}