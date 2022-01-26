import classes from "./about.module.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";
import { useEffect } from "react";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={classes.main}>
      <div>
        <Link to="/">
          <img src={Arrow} alt="" />
        </Link>

        <p className="medium-text medium-weight">About Us</p>
      </div>
      <div className={classes.whitebg}>
        <h2>About Us</h2>
        <p>
          -Stress free Delivery
          <br />
          <br />
          -Safe and affordable <br /> <br />
          -Experience luxurious rides with less <br />
          <br />
          User friendly webapp for easy access and convenience
          <br /> Register as a rider,be your own boss
          <br /> Doorstep pickup {"&"} delivery
          <br /> We pick up parcels from clients with our dispatch bikes or
          truck and deliver to locations within Remo, Ogun state Nigeria. #
          Request a ride Request a car ride through our user-friendly webapp.
          #Car Hire We offer car hire services for interstate travels or for
          special events #Track your ride/order Track the progress of rides and
          track parcels sent out at every point in transit #subscription
          package/storage facility We provide storage facilities to our clients
          on subscription packages for their bulk deliveries. <br />
          (Contact details)
          <br /> Fb/IG: godan_logistics
          <br /> Mail: info@godanlogistics.com <br />
          Address: 10 Temitope house, Ogunyanwo street Sagamu, Ogun state ☎️:
          09033339578 Webapp:
        </p>
      </div>
    </main>
  );
};
export default Policy;
