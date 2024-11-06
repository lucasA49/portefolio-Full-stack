import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./Pages/Contact";
import Accueil from "./Pages/Accueil";
import TextHome from "./TextHome";
import ButtonNav from "./ButtonNav";
import Projet from "./Pages/Projet";

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
    path: "contact",
    element: (
      <>

        <Contact />
        <App />,
      </>
    )
  },
  {
    path: "Projet",
    element: (
      <>
<Projet/>
<App/>

      </>
    )
  }
]);

export default router;