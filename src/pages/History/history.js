import classes from "./history.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import Orders from "../../components/HistoryOrder/historyOrder";
import { getRiderOrderHistory } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import Toast from "../../components/Toast/toast";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/loader";

const Deliveries = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(async () => {
    try {
      const res = await getRiderOrderHistory();
      console.log(res.data.orderHistory);
      setData(res.data.orderHistory);
      setLoad(false);
    } catch (error) {
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
        setLoad(false);
      }
    }
  }, []);
  return (
    <div className={classes.container}>
      {load && <Loader />}
      <h1>History</h1>
      <div className={classes.texts}>
        <p>Today</p>
        <span>Sort: Suggested</span>
      </div>
      <div>
        {data?.map((item, index) => (
          <Orders key={index} {...item} />
        ))}
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;
