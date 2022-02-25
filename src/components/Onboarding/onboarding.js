import classes from "./onboarding.module.css";
import Logo from "../../assets/images/onboarding/logo.svg";
import Arrow from "../../assets/images/onboarding/arrow.svg";
import Rider from "../../assets/images/onboarding/rider.webp";
import Typed from "react-typed";

const Onboarding = ({ onClick }) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={classes.typing}>
        <Typed
          strings={[
            "<span class='first'>Have a side hustle </span>  <span class='second'> in Sagamu, Ogun State.</span>",
            "<span class='first'>Ride for money</span> <span class='second'<span class='second'>and ride for fun</span>",
            "<span class='first'>Flexible working hours</span>  <span class='second'>without stress and hassle</span>",
          ]}
          typeSpeed={40}
          loop
        />
      </div>
      <div className={classes.rider}>
        <img src={Rider} alt="" />
      </div>
      <button onClick={onClick}>
        GET STARTED HERE <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Onboarding;
