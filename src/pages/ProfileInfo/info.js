import classes from "./info.module.css";
import Arrow from "../../assets/images/profileInfo/arrowBack.svg";
import Notification from "../../assets/images/profileInfo/notification.svg";
import Mail from "../../assets/images/profileInfo/mail.svg";
import Avatar from "../../assets/images/profileInfo/avatar.svg";
import Phone from "../../assets/images/profileInfo/phone.svg";
import Address from "../../assets/images/profileInfo/address.svg";
import PlateNumber from "../../assets/images/profileInfo/plateNumber.svg";
import VehicleDescription from "../../assets/images/profileInfo/vehicleDescription.svg";
import VehicleCategory from "../../assets/images/profileInfo/vehicleCategory.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RiderInfo } from "../../context/context";

const Info = ({ history }) => {
  const { info } = useContext(RiderInfo);
  return (
    <div className={classes.box}>
      <div className={classes.flexbox}>
        <img src={Arrow} alt="" onClick={() => history.goBack()} />
        <p>Profile Information</p>
        <Link to="/rides">
          <img src={Notification} alt="" />
        </Link>
      </div>
      <div className={`${classes.picture} center-flex medium-margin`}>
        <div>
          <img src={info.avatar} alt="" />
        </div>
      </div>
      <div className={classes.info}>
        <p>Full Name</p>
        <span>
          <img src={Avatar} alt="" />
          {info.fullName}
        </span>

        <p>Email Address</p>
        <span>
          <img src={Mail} alt="" />
          {info.email}
        </span>

        <p>Phone Number</p>
        <span>
          <img src={Phone} alt="" />
          {info.phoneNumber}
        </span>

        <p>Home Address</p>
        <span>
          <img src={Address} alt="" />
          {info.address}
        </span>

        <p>Vehicle Category</p>
        <span>
          <img src={VehicleCategory} alt="" />
          {info.vehicleCategory}
        </span>

        <p>Vehicle Description</p>
        <span>
          <img src={VehicleDescription} alt="" />
          {info.vehicleDescription}
        </span>

        <p>Plate Number</p>
        <span>
          <img src={PlateNumber} alt="" />
          Ajao Afeez
        </span>
      </div>
    </div>
  );
};
export default Info;
