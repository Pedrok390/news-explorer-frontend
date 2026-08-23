import aboutImage from '../../images/about-image.jpg'

export default function About(){
    return(
        <>
        <div className="about">
            <img className='about__image' src={aboutImage} alt='Foto do Autor' />
            <div className='about__info'>
                <h2 className='about__title'>Sobre o autor</h2>
                <p className='about__paragraph'>Esse bloco descreve o autor do projeto. Aqui você deve 
                    indicar seu nome, o que você faz e quais tecnologias 
                    de desenvolvedor você conhece.</p>
                <p className='about__paragraph'>Você também pode falar sobre sua experiência com o 
                    Practicum, o que aprendeu lá e como pode ajudar 
                    clientes em potencial.</p>
            </div>
        </div>
        </>
    )
}