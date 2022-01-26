import classes from "./newOrder.module.css";
import { ForwardArrow, Distance, months } from "../../constant";
import { Link } from "react-router-dom";
const NewOrder = ({
  distance,
  endDestination,
  startDestination,
  createdAt,
  _id,
}) => {
  return (
    <Link className={classes.box} to={`/order-info/${_id}`}>
      <div className={classes.price}>
        <p> ₦ {(distance / 10)?.toLocaleString()}</p>
        <ForwardArrow />
      </div>
      <div className={classes.subContainer}>
        <Distance />
        <div>
          <div className={classes.places}>
            <p className="small-text">{startDestination}</p>
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
            <p className="small-text">{endDestination}</p>
            <p></p>
            {/* <p>No 4, ijebu ode starttet</p> */}
          </div>
          <p className={classes.description}>to</p>
        </div>
      </div>
    </Link>
  );
};
export default NewOrder;
