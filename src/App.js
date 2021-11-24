import {
  Switch,
  Route,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import Bookings from "././pages/Bookings/bookings";
import Profile from "./pages/Profile/profile";
import Login from "./pages/Login/login";
import History from "./pages/History/history";
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
        <ProtectedRoute path="/history" exact component={History} />
        <ProtectedRoute path="/profile" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/history" exact component={History} /> */}
      </Switch>
    </>
  );
};
export default withRouter(App);
