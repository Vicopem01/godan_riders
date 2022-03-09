import classes from "./earnings.module.css";
import Back from "../../assets/images/earnings/back.svg";
import Success from "../../assets/images/earnings/success.svg";
import Cancelled from "../../assets/images/earnings/cancelled.svg";
import { getSuccessfulEarnings } from "../../services/apiCalls";
import { useContext, useEffect, useState } from "react";
import ToastMessage from "../../components/Toast/toast";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/loader";
import { RiderInfo } from "../../context/context";
import History from "../../components/Earnings/History/history";

const Earnings = ({ history }) => {
  const { info } = useContext(RiderInfo);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});
  useEffect(async () => {
    try {
      const res = await getSuccessfulEarnings();
      setData(res.data);
      console.log(res.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
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
  }, []);
  return (
    <>
      {loader && <Loader />}
      {!loader && (
        <main className={classes.main}>
          <div>
            <div className={classes.top}>
              <img
                src={Back}
                alt="back"
                className={classes.back}
                onClick={() => history.goBack()}
              />
              <img src={info.avatar} className={classes.avatar} />
            </div>
            <div className={classes.summary}>
              <p>Total earnings</p>
              <h2>₦ {data?.ordersEarnings[0].totalAmount.toLocaleString()}</h2>
              <p>
                Updated today at{" "}
                {new Date().toLocaleString("en-us", {
                  day: "2-digit",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            <h3>Rides Summary</h3>
            <div className={classes.cardContainer}>
              <div className={classes.cards} type="success">
                <img src={Success} alt="success" />
                <p>Completed rides</p>
                <h4>{data?.ordersEarnings[0].count} rides</h4>
              </div>

              <div className={classes.cards} type="cancelled">
                <img src={Cancelled} alt="cancelled" />
                <p>Cancelled rides</p>
                <h4>
                  {data?.declinedEarning.length < 1
                    ? "0"
                    : data?.declinedEarning[0].count}{" "}
                  rides
                </h4>
              </div>
            </div>
            <br />
            <History />
          </div>
        </main>
      )}
    </>
  );
};

export default Earnings;
