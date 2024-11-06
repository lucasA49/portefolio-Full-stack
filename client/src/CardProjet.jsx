import './styles/CardProjet.css'
import CAPY from './assets/capy.jpg'
import { NavLink } from 'react-router-dom';

function CardProjet() {
    return (
        <>
            <div className='cardprojet'>
                <div>
                    <h2 className='nomprojet'>Nom du projet</h2>
                    <p className='descriptionprojet'> descritpion du projet  en bref je le dit en bref sans trop abuser ceci est un test pour  voir si je peux mettre un texte en bref sans trop abuser</p>
                    <img className='imgprojet' src={CAPY} alt="" srcset="" />
                    <NavLink
                        to="/about"
                        className="btnprojet"
                    >
                        <div className="btnprojet2">
                            <p className='btnp'>tout sur moi</p>

                        </div>
                    </NavLink>
                </div>

            </div>
        </>
    );
}
export default CardProjet;
