import classes from "./navbar.module.css";
import { Avatar, Search, Order } from "../../../constant";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <NavLink to="/rides" activeClassName="active">
        <div>
          <Order />
          <span>Rides</span>
        </div>
      </NavLink>
      <NavLink to="/history" activeClassName="active">
        <div>
          <Search />
          <span>History</span>
        </div>
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <div>
          <Avatar />
          <span>Account</span>
        </div>
      </NavLink>
    </nav>
  );
};

export default NavBar;
