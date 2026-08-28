import githubIcon from '../../images/github-icon.svg'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <p className="footer__copyright">&#169; 2026, desenvolvido por Pedro Henrique</p>
                <div className="footer__socials">
                    <Link to='/' className='footer__social-link'>Início</Link>
                    <a className='footer__social-link' target="_blank">TripleTen</a>
                    <a href='https://github.com/Pedrok390' className='footer__social-link' target="_blank">
                        <img className='footer__social-icon' src={githubIcon} alt='Icone Github' />
                    </a>
                </div>
            </footer>
        </>
    )
}