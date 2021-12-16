import classes from "./bookings.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import NewOrder from "../../components/NewOrder/newOrder";
import Empty from "../../components/EmptyState/empty";
import { getRiderPendingOrder } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Loader from "../../components/Loader/loader";
import Filter from "../../assets/images/booking/filter.svg";

const Deliveries = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const getOrder = async () => {
    try {
      const res = await getRiderPendingOrder();
      console.log(res.data);
      setData([...data, ...res.data]);
    } catch (error) {
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting orders"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage text="Error getting orders" message={error.message} />
          );
    }
  };
  const time = () => {
    setInterval(function () {
      getOrder();
    }, 8000);
  };
  useEffect(async () => {
    setLoad(true);
    try {
      const res = await getRiderPendingOrder();
      console.log(res.data);
      setData(res.data);
      setLoad(false);
      time();
    } catch (error) {
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting orders"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage text="Error getting orders" message={error.message} />
          );
      setLoad(false);
    }
  }, []);
  return (
    <div className={classes.container}>
      {load && <Loader />}
      <h1>Rides</h1>
      <div className={classes.texts}>
        <p>Pending rides</p>
        <span>
          Filter <img src={Filter} alt="" />
        </span>
        <ul>
          <li>Pending rides</li>
          <li>In progress</li>
          <li></li>
        </ul>
      </div>
      {data.length < 1 && !load && <Empty text="You currently have no order" />}
      <div>
        {data?.map((item, index) => (
          <NewOrder key={index} {...item.bookingId} _id={item._id} />
        ))}
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;
