import {
  Switch,
  Route,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import Bookings from "././pages/Bookings/bookings";
import AllBookings from "././pages/Bookings/allBookings";
import PendingBookings from "././pages/Bookings/pendingBookings";
import Profile from "./pages/Profile/profile";
import ProfileInfo from "./pages/ProfileInfo/info";
import Login from "./pages/Login/login";
import Policy from "./pages/Policy/policy";
import AboutUs from "./pages/AboutUs/about";
import History from "./pages/History/history";
import Success from "./pages/Success/success";
import Earnings from "./pages/Earnings/earnings";
import Error from "./pages/404/404";
import BookingDetails from "./pages/BookingDetails/details";
import { createAutoLogout } from "./services/createAutoLogout";
import { useEffect, useState } from "react";
import { RiderInfo } from "./context/context";
import { getRiderInfo } from "./services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "./components/Toast/toast";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const validToken = createAutoLogout();
  if (!validToken) return <Redirect to="/login" />;
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
const App = ({ history }) => {
  const [info, setInfo] = useState(RiderInfo);
  let path = useLocation();
  useEffect(async () => {
    try {
      const res = await getRiderInfo();
      setInfo(res.data.dataInfo.getRiderInfo);
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
  }, []);
  useEffect(() => {
    if (path.pathname === "/") {
      history.push("/rides");
    }
  }, [path]);
  return (
    <>
      <Switch>
        <RiderInfo.Provider value={{ info, setInfo }}>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/rides" exact component={Bookings} />
          <ProtectedRoute path="/all-rides" exact component={AllBookings} />
          <ProtectedRoute
            path="/current-rides"
            exact
            component={PendingBookings}
          />
          <ProtectedRoute path="/history" exact component={History} />
          <ProtectedRoute path="/profile" exact component={Profile} />
          <ProtectedRoute path="/profile-info" exact component={ProfileInfo} />
          <ProtectedRoute path="/privacy-policy" exact component={Policy} />
          <ProtectedRoute path="/about-us" exact component={AboutUs} />
          <ProtectedRoute path="/success" exact component={Success} />
          <ProtectedRoute path="/earnings" exact component={Earnings} />
          <ProtectedRoute
            path="/order-info/:id"
            exact
            component={BookingDetails}
          />
        </RiderInfo.Provider>
          <Route path="/*" exact component={Error} />
      </Switch>
    </>
  );
};
export default withRouter(App);
