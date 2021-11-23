import classes from "./history.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import Orders from "../../components/Orders/orders";

const Deliveries = () => {
  return (
    <div className={classes.container}>
      <h1>History</h1>
      hello ohhh
      <div>
        <p>Today</p>
        <span>Sort: Suggested</span>
      </div>
      <div>
        <Orders />
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;