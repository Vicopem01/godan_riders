import classes from "./profile.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import Links from "../../components/UI/ProfileLinks/links";
import {
  User,
  Earnings,
  SignOut,
  Noitification,
  ForwardArrowDark,
  Policy,
  About,
} from "../../constant";
import { logout } from "../../services/functions";
import { useContext } from "react";
import { RiderInfo } from "../../context/context"

const Deliveries = ({ history }) => {
  const { info } = useContext(RiderInfo);
  return (
    <div className={classes.main}>
      <h1>Account</h1>
      <div className={classes.profile}>
        <div className={classes.picture}>
          <img src={info?.avatar} alt="" />
        </div>
        <div className={classes.info}>
          <p>Rider Profile</p>
          <p>{info?.fullName}</p>
        </div>
      </div>
      <div className={classes.links}>
        <Links
          to="/profile-info"
          text="Profile Information"
          svg={<User />}
          arrow={<ForwardArrowDark />}
        />
        <Links
          text="Earnings"
          svg={<Earnings />}
          arrow={<ForwardArrowDark />}
          to="/earnings"
        />
        <Links
          text="New Updates"
          svg={<Noitification />}
          arrow={<ForwardArrowDark />}
        />
        <Links
          text="Privacy Policy"
          to="/privacy-policy"
          svg={<Policy />}
          arrow={<ForwardArrowDark />}
        />
        <Links
          text="About Us"
          to="/about-us"
          svg={<About />}
          arrow={<ForwardArrowDark />}
        />
        <Links
          text="Sign Out"
          svg={<SignOut />}
          onClick={() => logout(history)}
        />
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;
