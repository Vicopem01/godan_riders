import classes from "./confirm.module.css";

const Cancel = ({ clickConfirm, cancel }) => {
  return (
    <div className={classes.bg}>
      <div className={classes.sub}>
        <p>Is the delivery complete?</p>
        <div className={classes.btn}>
          <button onClick={clickConfirm}>Yes</button>
          <button onClick={cancel}>No</button>
        </div>
      </div>
    </div>
  );
};
export default Cancel;
