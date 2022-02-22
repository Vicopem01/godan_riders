import classes from "./bookings.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import NewOrder from "../../components/NewOrder/newOrder";
import Empty from "../../components/EmptyState/empty";
import { getRiderAllOrder } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Loader from "../../components/Loader/loader";
import Filter from "../../assets/images/booking/filter.svg";
import OutsideClickHandler from "react-outside-click-handler";

const Deliveries = ({ history }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [options, setOptions] = useState(false);
  const getOrder = async () => {
    try {
      const res = await getRiderAllOrder();
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

  const time = () =>
    setInterval(function () {
      getOrder();
    }, 8000);

  useEffect(async () => {
    setLoad(true);
    try {
      const res = await getRiderAllOrder();
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
        <p>All Rides</p>
        <span onClick={() => setOptions(true)}>
          <img src={Filter} alt="" />
        </span>
      </div>
      {options && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setOptions(false);
          }}
        >
          <ul className={classes.list}>
            <li onClick={() => history.push("/rides")}>Pending</li>
            <span></span>
            <li onClick={() => history.push("/current-rides")}>In-Progress</li>
            <span></span>
            <li onClick={() => window.location.reload()}>All</li>
          </ul>
        </OutsideClickHandler>
      )}
      {data.length < 1 && !load && <Empty text="You currently have no order" />}
      <div>
        {data.length > 0 &&
          data?.map((item, index) => (
            <NewOrder key={index} {...item.bookingId} _id={item._id} />
          ))}
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;
