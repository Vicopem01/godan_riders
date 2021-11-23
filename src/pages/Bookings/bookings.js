import classes from "./bookings.module.css";
import Menu from "../../components/Menu/menu";
import NavBar from "../../components/NavBar/navbar";
import SideBar from "../../components/SideBar/sidebar";
import { useState } from "react";
import Orders from "../../components/Orders/orders";

const Deliveries = () => {
  return (
    <div className={classes.container}>
      <h1>Bookings</h1>
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