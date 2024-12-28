import { NavLink } from "react-router-dom";

function NavLogin() {
    return (
        <NavLink
        to="/projet"
        className="loginmenu"
    >
        <div className="btn">
            <p>projet</p>
       
        </div>
    </NavLink>
    )

}
export default NavLogin;