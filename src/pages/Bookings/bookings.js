import classes from "./bookings.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import NewOrder from "../../components/NewOrder/newOrder";
import Empty from "../../components/EmptyState/empty";
import { getRiderPendingOrder } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Loader from "../../components/Loader/loader";

const Deliveries = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(async () => {
    setLoad(true);
    try {
      const res = await getRiderPendingOrder();
      console.log(res.data);
      setData(res.data);
      setLoad(false);
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
  const time = async () => {
    setInterval(function () {
      try {
        const res = getRiderPendingOrder();
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
              <ToastMessage
                text="Error getting orders"
                message={error.message}
              />
            );
      }
    }, 5000);
  };
  return (
    <div className={classes.container}>
      {load && <Loader />}
      <h1>Bookings</h1>
      <div className={classes.texts}>
        <p onClick={time}>Today</p>
        <span>Sort: Suggested</span>
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
