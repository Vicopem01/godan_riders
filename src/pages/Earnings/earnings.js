import classes from "./earnings.module.css";
import Back from "../../assets/images/earnings/back.svg";
import Success from "../../assets/images/earnings/success.svg";
import Cancelled from "../../assets/images/earnings/cancelled.svg";
import { Link } from "react-router-dom";

const Earnings = ({ history }) => {
  return (
    <main className={classes.main}>
      <div>
        <div className={classes.top}>
          <img
            src={Back}
            alt="back"
            className={classes.back}
            onClick={() => history.goBack()}
          />
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=alexander-hipp-iEEBWgY_6lA-unsplash.jpg&w=640"
            alt="avatar"
            className={classes.avatar}
          />
        </div>
        <div className={classes.summary}>
          <p>Total earnings</p>
          <h2>₦28,750.00</h2>
          <p>Updated today at 8:02am</p>
        </div>

        <h3>Rides Summary</h3>
        <div className={classes.cardContainer}>
          <div className={classes.cards} type="success">
            <img src={Success} avatar="success" />
            <p>Completed rides</p>
            <h4>22 rides</h4>
          </div>

          <div className={classes.cards} type="cancelled">
            <img src={Cancelled} avatar="cancelled" />
            <p>Cancelled rides</p>
            <h4>22 rides</h4>
          </div>
        </div>
        <br />
        <div>
          <h3>Recent Transactions</h3>
          <div>
            {/* container to be mapped */}
            {
              <div className={classes.transactions}>
                <div>
                  <h4>₦28,750.00</h4>
                  <span>Jan 02, 2022</span>
                  <span>8:05am</span>
                </div>
                <p type="success">success</p>
              </div>
            }
            {
              <div className={classes.transactions}>
                <div>
                  <h4>₦28,750.00</h4>
                  <span>Jan 02, 2022</span>
                  <span>8:05am</span>
                </div>
                <p type="success">success</p>
              </div>
            }
            {
              <div className={classes.transactions}>
                <div>
                  <h4>₦28,750.00</h4>
                  <span>Jan 02, 2022</span>
                  <span>8:05am</span>
                </div>
                <p type="cancelled">cancelled</p>
              </div>
            }
            {
              <div className={classes.transactions}>
                <div>
                  <h4>₦28,750.00</h4>
                  <span>Jan 02, 2022</span>
                  <span>8:05am</span>
                </div>
                <p type="success">success</p>
              </div>
            }
            {
              <div className={classes.transactions}>
                <div>
                  <h4>₦28,750.00</h4>
                  <span>Jan 02, 2022</span>
                  <span>8:05am</span>
                </div>
                <p type="cancelled">cancelled</p>
              </div>
            }
          </div>
        </div>
        <Link to="/history" className={classes.showMore}>
          SHOW MORE
        </Link>
      </div>
    </main>
  );
};

export default Earnings;
