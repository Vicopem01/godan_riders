import classes from "./singleOrder.module.css";

const SingleOrder = () => {
  return (
    <div className={classes.box}>
      <div>
        <div>
          <p>Mowe Sagamu</p>
          <p>No 4 ijebu ode street sagamu</p>
        </div>
        <span>Delivered</span>
      </div>
      <br />
      <div>
        <div>
          <p>Mowe Sagamu</p>
          <p>No 4 ijebu ode street sagamu</p>
        </div>
        <span>#5,000</span>
      </div>
    </div>
  );
};
export default SingleOrder;
