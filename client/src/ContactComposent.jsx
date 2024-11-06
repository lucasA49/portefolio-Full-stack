import './styles/contact.css'

function ContactComposant() {
    return (

        
        <form className='formul'>
        <div className='test'> 
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className='test'> 
            <label htmlFor="name">Prénom :</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div className='test'> 
            <label htmlFor="name">Société:</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="email">Numéro de télephone :</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="message"> Votre Message :</label>
            <textarea id="message" name="message" required />
        </div>

        <button  type="submit">Envoyer</button>
    </form>



)
}

export default ContactComposant;
