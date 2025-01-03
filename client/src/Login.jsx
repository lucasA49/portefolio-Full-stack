import React from "react";
import "./styles/login.css"
function Login () {
    const [state, setState] = React.useState({
        email: "",
        password: ""
      });
      const handleChange = evt => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      };
    
      const handleOnSubmit = evt => {
        evt.preventDefault();
    
        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);
    
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }
      };
      return (

    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Connexion</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>rentre tes login</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          />
        <a href="#">Mot de passe oublier ?</a>
        <button>Connexion</button>
      </form>
    </div>
)

}
export default  Login;
