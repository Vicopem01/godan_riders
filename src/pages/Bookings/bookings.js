import classes from "./bookings.module.css";
import NavBar from "../../components/UI/NavBar/navbar";
import NewOrders from "../../components/NewOrders/newOrders";
import Empty from "../../components/EmptyState/empty";
import { useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Deliveries = () => {
  const [address, setaddress] = useState(null);

  return (
    <div className={classes.container}>
      <h1>Bookings</h1>
      <div className={classes.texts}>
        <p>Today</p>
        <span>Sort: Suggested</span>
      </div>
      <div>{/* <Empty /> */}</div>
      <div className={classes.googlePlaces}>
        <GooglePlacesAutocomplete
          apiKey="AIzaSyBpybr8fIeirph4O7kfGlrekKnkIZhOJ5A"
          autocompletionRequest={{
            componentRestrictions: {
              country: ["ng"],
            },
          }}
          initialValue={address}
          selectProps={{
            address,
            onChange: setaddress,
            placeholder: "Search Location",
            // onFocus: () => showHint(true),
            // onBlur: () => showHint(false),
            styles: {
              input: (provided) => ({
                ...provided,
                color: "#12082D",
              }),
              option: (provided) => ({
                ...provided,
                color: "#12082D",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#12082D",
              }),
            },
          }}
        />
      </div>
      <div>
        <NewOrders />
      </div>
      <NavBar />
    </div>
  );
};
export default Deliveries;
