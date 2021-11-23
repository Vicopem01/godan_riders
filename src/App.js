import { Switch, Route, Redirect } from "react-router-dom";
import Bookings from "././pages/Bookings/bookings";
import Profile from "./pages/Profile/profile";
import Login from "./pages/Login/login";
import History from "./pages/History/history";
import { createAutoLogout } from "./services/createAutoLogout";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const validToken = createAutoLogout();
  if (!validToken) return <Redirect to="/login" />;
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
const App = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute path="/" exact component={Bookings} />
        <ProtectedRoute path="/profile" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        <Route path="/history" exact component={History} />
      </Switch>
    </>
  );
};
export default App;
