import classes from "./details.module.css";
import Map from "../../components/Map/map";
import Arrow from "../../assets/images/profileInfo/arrowBack.svg";
import Notification from "../../assets/images/profileInfo/notification.svg";
import { Link } from "react-router-dom";
import {
  getSinglePendingOrder,
  approveOrder,
  declineOrder,
} from "../../services/apiCalls";
import { Distance } from "../../constant";
import Cancel from "../../components/Cancel/cancel";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/loader";
// import Cancel from "../../components/Cancel/cancel";

const Details = ({ history }) => {
  let { id } = useParams();
  const [popup, setpopup] = useState(false);
  const [load, setLoad] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [data, setData] = useState({});
  useEffect(async () => {
    setLoad(true);
    try {
      const res = await getSinglePendingOrder(id);
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
    }
    setLoad(false);
  }, []);

  const approveNewOrder = async (evt) => {
    evt.preventDefault();
    setLoad(true);
    try {
      const res = await approveOrder(id);
      console.log(res);
      window.location.reload();
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
    setLoad(false);
  };

  const declineNewOrder = async (evt) => {
    evt.preventDefault();
    setLoad(true);
    try {
      const res = await declineOrder(id);
      console.log(res);
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
    }
    setLoad(false);
    setCancel(false);
  };

  return (
    <div className={classes.general}>
      {load && <Loader />}
      {cancel && (
        <Cancel
          onClick={() => setCancel(false)}
          cancelOrder={declineNewOrder}
        />
      )}
      <div className={classes.flexbox}>
        <img src={Arrow} alt="" onClick={() => history.goBack()} />
        <p>Order Information</p>
        <Link to="/rides">
          <img src={Notification} alt="" />
        </Link>
      </div>
      <Map />
      {!load && (
        <div className={classes.overflow}>
          <div className={classes.box}>
            <div className={classes.subContainer}>
              <Distance />
              <div>
                <div className={classes.places}>
                  <p className="small-text">
                    {data?.bookingId?.startDestination}
                  </p>
                  <p>
                    {new Date(data?.createdAt).toLocaleString("en-US", {
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
                  <p className="small-text">
                    {data?.bookingId?.endDestination}
                  </p>
                  <p></p>
                  {/* <p>No 4, ijebu ode starttet</p> */}
                </div>
                <p className={classes.description}>to</p>
              </div>
            </div>
            {data?.deliveryStatus === "Awaiting-Pickup" && (
              <div className={classes.subContainer}>
                <p>Customer Information</p>
                <div className={classes.userInfo}>
                  <p>{data?.bookerDetails?.fullName}</p>
                  <p>
                    <a href={`mailto${data?.bookerDetails.phoneNumber}`}>
                      {data?.bookerDetails?.phoneNumber}
                    </a>
                  </p>
                </div>
              </div>
            )}
            <div className={classes.subContainer}>
              <p>Price Breakdown</p>
              <div className={classes.places}>
                <p>₦ {data?.bookingId?.distance / 10}</p>
                <p>Pay by {data?.bookingId?.paymentMethod}</p>
              </div>
            </div>
          </div>
          {data?.deliveryStatus === "Pending" && (
            <div className={classes.btn}>
              <button onClick={() => setCancel(true)}>Decline order </button>
              <button onClick={approveNewOrder}>Accept Order </button>
            </div>
          )}
        </div>
      )}
      {popup && <Cancel setPopup={setpopup} />}
    </div>
  );
};

export default Details;
