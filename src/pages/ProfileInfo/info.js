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
import { getRiderInfo } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import Toast from "../../components/Toast/toast";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/loader";
import { Link } from "react-router-dom";

const Info = ({ history }) => {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(async () => {
    try {
      const res = await getRiderInfo();
      console.log(res.data.dataInfo.getRiderInfo);
      setData(res.data.dataInfo.getRiderInfo);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      if (error.response) {
        toast.error(
          <Toast
            text="Error getting data"
            message={error.response.data.message}
          />
        );
      } else {
        toast.error(
          <Toast text="Error getting data" message={error.message} />
        );
      }
    }
  }, []);
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
          <img src={data.avatar} alt="" />
        </div>
      </div>
      <div className={classes.info}>
        <p>Full Name</p>
        <span>
          <img src={Avatar} alt="" />
          {data.fullName}
        </span>

        <p>Email Address</p>
        <span>
          <img src={Mail} alt="" />
          {data.email}
        </span>

        <p>Phone Number</p>
        <span>
          <img src={Phone} alt="" />
          {data.phoneNumber}
        </span>

        <p>Home Address</p>
        <span>
          <img src={Address} alt="" />
          {data.address}
        </span>

        <p>Vehicle Category</p>
        <span>
          <img src={VehicleCategory} alt="" />
          {data.vehicleCategory}
        </span>

        <p>Vehicle Description</p>
        <span>
          <img src={VehicleDescription} alt="" />
          {data.vehicleDescription}
        </span>

        <p>Plate Number</p>
        <span>
          <img src={PlateNumber} alt="" />
          Ajao Afeez
        </span>
      </div>
      {load && <Loader />}
    </div>
  );
};
export default Info;
