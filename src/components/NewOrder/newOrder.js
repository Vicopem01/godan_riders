import classes from "./newOrder.module.css";
import { ForwardArrow, Distance } from "../../constant";

const NewOrder = () => {
    return (
        <div className={classes.box}>
            <div className={classes.price}>
                <p>#5000</p>
                <ForwardArrow />
            </div>
            <div className={classes.subContainer}>
                <Distance />
                <div>
                    <p className={classes.description}>from</p>
                    <div className={classes.places}>
                        <p className="small-text">Mowe Sagamu, Ogun state</p>
                        <p>No 4, ijebu ode starttet</p>
                    </div>
                </div>
                <div>
                    <p className={classes.description}>to</p>
                    <div className={classes.places}>
                        <p className="small-text">Mowe Sagamu, Ogun state</p>
                        <p>No 4, ijebu ode starttet</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewOrder;