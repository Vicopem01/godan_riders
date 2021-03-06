import classes from "./singleOrder.module.css";
import { Distance } from "../../constant";

const NewOrder = ({ bookingId, deliveryStatus, createdAt, amount }) => {
  return (
    <div className={classes.box}>
      <div className={classes.subContainer}>
        <Distance />
        <div>
          <div className={classes.places}>
            <p className="small-text">{bookingId?.startDestination}</p>
            <p>
              {new Date(createdAt).toLocaleString("en-US", {
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
          <p className={classes.description}>from</p>
        </div>
        <div>
          <div className={classes.places}>
            <p className="small-text">{bookingId?.endDestination}</p>
            <p></p>
          </div>
          <p className={classes.description}>to</p>
        </div>
        <div className={classes.price}>
          <p>{deliveryStatus}</p>
          <p>₦ {amount}</p>
        </div>
      </div>
    </div>
  );
};
export default NewOrder;
