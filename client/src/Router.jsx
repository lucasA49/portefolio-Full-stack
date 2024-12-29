import { createBrowserRouter, useLoaderData } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import Accueil from "./pages/Accueil";
import TextHome from "./TextHome";
import ButtonNav from "./ButtonNav";
import Projet from "./pages/Projet";
import Login from "./Login";
import Infomoi from "./Infomoi";
import CardProjet from "./CardProjet";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Page non trouvée</h1>,
    element: (

      <>
        <ButtonNav />
        <Accueil />,
        <App />
        <TextHome />
      </>
    )
  },
  {
    path: "about",
    errorElement: <h1>Page non trouvée</h1>,
    element: (

      <>
        <ButtonNav />
        <App />
        <Infomoi/>
 
      </>
    )
  },
  {
    path: "contact",
    element: (
      <>

        <Contact />
        <App />,
      </>
    )
  },
  {
    path: "login",
    element: (
      <>

        <Login/>
        <App />,
      </>
    )
  },
  // {
  //   path: "Projet",
  //   loader: async () => fetch("http://localhost:3000/api/projet"),
  //   element: (
  //     <>
  //       <Projet />
  //       <App />

  //     </>
  //   )
  // },

  {
    path: "projet",
    loader: async () => {
      try {
        const response = await fetch("http://localhost:3000/api/projet");
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Données récupérées:", data);  // Vérifiez la structure des données
  
        // Vérifiez si 'projets' est bien un tableau
        if (Array.isArray(data.projets)) {
          return data.projets;  // Retourne les projets si c'est un tableau
        } else {
          return [];  // Retourne un tableau vide si 'projets' n'est pas un tableau
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Failed to fetch data' };  // Message d'erreur en cas de problème
      }
    },
    element: (
      <>
        <Projet />
        <CardProjet />
        <App />
      </>
    )  // <-- La virgule est maintenant présente ici
  }
  
  
  
]);

export default router;
