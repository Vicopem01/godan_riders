import classes from "./history.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import Orders from "../../components/Orders/orders";
import { getRiderOrderHistory } from "../../services/apiCalls";
import { useEffect, useState } from "react";

const Deliveries = () => {
  useEffect(async () => {
    try {
      const res = await getRiderOrderHistory();
      console.log(res);
    } catch (error) {
      console.log(error.message);
      console.log(error.name);
      console.log(error.stack);
    }
  });
  return (
    <div className={classes.container}>
      <h1>History</h1>
      <div className={classes.texts}>
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
