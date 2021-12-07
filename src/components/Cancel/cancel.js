import classes from "./cancel.module.css";

const Cancel = ({ cancelOrder, onClick }) => {
  return (
    <div className={classes.bg}>
      <div className={classes.sub}>
        <p>Are you sure you want to cancel this booking</p>
        <div className={classes.btn}>
          <button onClick={onClick}>Go back</button>
          <button onClick={cancelOrder} >Cancel order</button>
        </div>
      </div>
    </div>
  );
};
export default Cancel;
