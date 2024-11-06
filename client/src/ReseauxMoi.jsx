import { Link } from "react-router-dom";
import "./styles/reseaux.css";
import linkedin from "./assets/linkedin.png";
import cv from "./assets/cv.png";
import tel from "./assets/telephone.jpg";

function ReseauxMoi() {
  const pdfFile = "./assets/cv.pdf";
  return (
    <div className="conteneur-reseaux">
      <div className="">        
            <img className="" src={linkedin} alt="" />
          <Link className=""
          to="https://www.linkedin.com/in/lucas-aksu-a196a1271/"
          >
            Mon profil Linkedin
          </Link>
        
      </div>
      <div className="">
        <img className="" src={tel} alt="" />
        <a className="" href={`tel:${665373287}`}>
          0665373287
        </a>
      </div>
      <div className="">
        <img className="" src={cv} alt="" />
        <a
          className=""
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Télécharger le PDF
        </a>
      </div>
    </div>
  );
}
export default ReseauxMoi;
