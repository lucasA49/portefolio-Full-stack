import './styles/CardProjet.css'
import CAPY from './assets/capy.jpg'
import { Link } from 'react-router-dom';

function CardProjet({projet}) {
    return (
        <>
            <div className='cardprojet'>
                <div>
                    <h2 className='nomprojet'>{projet.nom}</h2>
                    <img className='imgprojet' src={projet.image} alt="" srcset="" />
                    <p className='descriptionprojet'> {projet.description}</p>
                    <Link
                        to={projet.lien}
                        className="btnprojet"
                    >
                            voir le site
                    </Link>
                    <Link
                        to={projet.github}
                        className="btnprojet"
                    >
                            voir le github
                    </Link>
                </div>

            </div>
        </>
    );
}
export default CardProjet;
