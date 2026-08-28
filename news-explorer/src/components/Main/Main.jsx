import { useState } from 'react';

import SearchForm from '../SearchForm/SearchForm.jsx'
import About from '../About/About.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

import { searchNews } from '../../utils/newsApi.js';

export default function Main(props) {
    const {isLoggedIn} = props
    const [showResults, setShowResults] = useState(false);
    const [visibleCards, setVisibleCards] = useState(3)
    const [cards, setCards] = useState([])
    const handleSearch = (search) => {
        if(search !== ''){
            setShowResults(true)
            searchNews(search)
            .then((cards)=> {
                setCards(cards)
            })
            
        }
        
    }

    return(
        <>
            <SearchForm onSearch={handleSearch} />
            {showResults && 
                <div className='results'>
                    <h2 className='results__title'>Procurar Resultados</h2>
                    <NewsCardList cards={cards} 
                                visibleCards={visibleCards} 
                                setVisibleCards={setVisibleCards} 
                                type='bookmark' 
                                isLoggedIn={isLoggedIn} 
                    />
                </div>
            }
            <About />
            
        </>
    )
}