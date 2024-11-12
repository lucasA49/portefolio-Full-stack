import { useLoaderData } from "react-router-dom";
import ButtonNav from "../ButtonNav";
import CardProjet from "../CardProjet";

function Projet() {
    const projet = useLoaderData();
    console.log(projet)
    return (
        <main className="projet-page">
            <ButtonNav />
            <section className="card-projet-contener">

            {projet.map((e) => (
                <CardProjet key={e.id} projet={e} /> // Si `e` est l'objet complet du projet
            ))}        
            {projet.map((e) => (
                <CardProjet key={e.id} projet={e} /> // Si `e` est l'objet complet du projet
            ))}        
            </section>
        </main>

    )

}
export default Projet;