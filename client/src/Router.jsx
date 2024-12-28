import { createBrowserRouter, useLoaderData } from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import Accueil from "./pages/Accueil";
import TextHome from "./TextHome";
import ButtonNav from "./ButtonNav";
import Projet from "./pages/Projet";
import Login from "./Login";
import Infomoi from "./Infomoi";
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
  {
    path: "Projet",
    loader: async () => fetch("http://localhost:3000/api/projet"),
    element: (
      <>
        <Projet />
        <App />

      </>
    )
  },


]);

export default router;
