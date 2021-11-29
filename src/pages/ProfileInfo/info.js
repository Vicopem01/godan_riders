import classes from "./info.module.css";
import Arrow from "../../assets/images/profileInfo/arrowBack.svg";
import Notification from "../../assets/images/profileInfo/notification.svg";

const Info = ({ history }) => {
  return (
    <div>
      <div>
        <img src={Arrow} alt="" onClick={() => history.goBack()} />
        <p>Profile Information</p>
        <img src={Notification} alt="" />
      </div>
    </div>

  );
};
export default Info;
