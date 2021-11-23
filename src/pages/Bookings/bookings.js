import classes from "./bookings.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import { useState } from "react";
import NewOrders from "../../components/NewOrders/newOrders";

const Deliveries = () => {
  return (
    <div className={classes.container}>
      <h1>Bookings</h1>
      <div className={classes.texts}>
        <p>Today</p>
        <span>Sort: Suggested</span>
      </div>
      <div>
        <NewOrders />
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;