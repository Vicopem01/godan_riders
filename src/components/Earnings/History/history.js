import classes from "./history.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRiderOrderHistory } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";

const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    try {
      const res = await getRiderOrderHistory();
      console.log(res.data.orderHistory);
      setData(res.data.orderHistory);
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
      <div>
        <h3>Recent Transactions</h3>
        <div>
          {loader && <p style={{ textAlign: "center" }}>Loading...</p>}
          {!loader &&
            data.slice(0, 5).map((item, index) => (
              <div className={classes.transactions} key={index}>
                <div>
                  <h4>₦ {item?.amount?.toLocaleString()}</h4>
                  <span>
                    {new Date(item.createdAt).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>
                    {" "}
                    {new Date(item.createdAt).toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
                {item.deliveryStatus === "Declined" && (
                  <p type="cancelled">cancelled</p>
                )}
                {item.deliveryStatus === "Approved" && (
                  <p type="pending">pending</p>
                )}
                {item.deliveryStatus === "Declined" && (
                  <p type="cancelled">cancelled</p>
                )}
              </div>
            ))}
        </div>
      </div>
      <Link to="/history" className={classes.showMore}>
        SHOW MORE
      </Link>
    </>
  );
};

export default History;
