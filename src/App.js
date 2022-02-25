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
import DeclinedBookings from "././pages/Bookings/declinedBookings";
import Profile from "./pages/Profile/profile";
import ProfileInfo from "./pages/ProfileInfo/info";
import Login from "./pages/Login/login";
import Policy from "./pages/Policy/policy";
import AboutUs from "./pages/AboutUs/about";
import History from "./pages/History/history";
import Success from "./pages/Success/success";
import BookingDetails from "./pages/BookingDetails/details";
import { createAutoLogout } from "./services/createAutoLogout";
import { useEffect } from "react";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const validToken = createAutoLogout();
  if (!validToken) return <Redirect to="/login" />;
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
const App = ({ history }) => {
  let path = useLocation();
  useEffect(() => {
    if (path.pathname === "/") {
      history.push("/rides");
    }
  }, [path]);
  return (
    <>
      <Switch>
        <ProtectedRoute path="/rides" exact component={Bookings} />
        <ProtectedRoute path="/all-rides" exact component={AllBookings} />
        <ProtectedRoute
          path="/cancelled-rides"
          exact
          component={DeclinedBookings}
        />
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
        <ProtectedRoute
          path="/order-info/:id"
          exact
          component={BookingDetails}
        />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
};
export default withRouter(App);
