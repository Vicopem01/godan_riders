import classes from "./login.module.css";
import { ButtonWhite } from "../../components/UI/Button/button";
import { useState, useEffect } from "react";
import { emailCheck } from "../../services/functions";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Loader from "../../components/UI/Loader/loader";
import { login } from "../../services/apiCalls";
import Logo from "../../assets/images/authentication/godan_logo.svg";
import Mail from "../../assets/images/authentication/mail.svg";
import Padlock from "../../assets/images/authentication/padlock.svg";
import Onboarding from "../../components/Onboarding/onboarding";

const Login = ({ history }) => {
  const [loader, setLoader] = useState(false);
  const [board, setBoard] = useState(true);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLogin = async (evt) => {
    evt.preventDefault();
    if (mail === "" || pass === "") {
      toast.error(
        <ToastMessage
          text="Error"
          message="Email Address and Password required"
        />
      );
    } else {
      if (!emailCheck(mail)) {
        toast.error(
          <ToastMessage text="Error" message="Invalid Email Address" />
        );
      } else {
        if (pass.length < 6) {
          toast.error(
            <ToastMessage text="Error" message="6 charater password mininum" />
          );
        } else {
          let data = {
            email: mail,
            password: pass,
          };
          try {
            setLoader(true);
            const res = await login(data);
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("_id", res.data.data.hostId);
            history.push("/");
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
        }
      }
    }
  };
  return (
    <main>
      {board && <Onboarding onClick={() => setBoard(false)} />}
      {!board && (
        <div className={classes.main}>
          <div>
            <div className="medium-padding center-flex">
              <img className="" src={Logo} alt="Logo" />
            </div>
            <div className="small-margin">
              <p className="medium-text  medium-weight">Welcome Back</p>
              <p className="medium-text">Login your Godan account</p>
            </div>
            <form className="medium-padding">
              <label htmlFor="email" className={classes.flexLabel}>
                <img src={Mail} alt="e-mail" />
                <span></span>
                <input
                  type="email"
                  placeholder="E-Mail"
                  id="email"
                  onChange={(e) => setMail(e.target.value)}
                />
              </label>
              <br/>
              <label htmlFor="password" className={classes.flexLabel}>
                <img src={Padlock} alt="password" />
                <span></span>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </label>
              <ButtonWhite onClick={handleLogin} className="center-flex">
                {loader ? <Loader /> : "Login"}
              </ButtonWhite>
              {/* <div className={classes.line}>
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          <button className={classes.google}>Sign up with Google</button> */}
              {/* <p className="small-text center-text medium-margin">
            Don't have an account? <Link to="/register">Create Account</Link>
          </p> */}
            </form>
          </div>
        </div>
      )}
    </main>
  );
};
export default Login;
