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
  Shield,
} from "../../constant";
import Avatar from "../../assets/Avatar.png";
import { logout } from "../../services/functions";
import { getRiderInfo } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";

const Deliveries = ({ history }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    try {
      const res = await getRiderInfo();
      setData(res.data.dataInfo.getRiderInfo);
    } catch (error) {
      toast.error(
        <ToastMessage
          text="Error fetching information"
          message={error.message}
        />
      );
    }
  }, []);
  return (
    <div className={classes.main}>
      <h1>Account</h1>
      <div className={classes.profile}>
        <div className={classes.picture}>
          <img src={data?.avatar} alt="" />
        </div>
        <div className={classes.info}>
          <p>Rider Profile</p>
          <p>{data?.fullName}</p>
        </div>
      </div>
      <div className={classes.links}>
        <Links
          text="Earnings"
          svg={<Earnings />}
          arrow={<ForwardArrowDark />}
        />
        <Links
          text="Profile Information"
          svg={<User />}
          arrow={<ForwardArrowDark />}
        />
        {/* <Links
          text="Vehicle Information"
          svg={<Vehicle />}
          arrow={<ForwardArrowDark />}
        /> */}
        <Links
          text="New Updates"
          svg={<Noitification />}
          arrow={<ForwardArrowDark />}
        />
        <Links
          text="Privacy Policy"
          svg={<Policy />}
          arrow={<ForwardArrowDark />}
        />
        <Links text="Site Map" svg={<Shield />} arrow={<ForwardArrowDark />} />
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
