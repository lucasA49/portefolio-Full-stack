import ContactComposant from "../ContactComposent";
import ButtonNav from "../ButtonNav";
import ReseauxMoi from "../ReseauxMoi";
function Contact() {
    return (

        <>
            <ButtonNav />
          <div className="conteneur-contact">

            <ReseauxMoi />
            <ContactComposant />
          </div>
        </>
    )
}

export default Contact;
