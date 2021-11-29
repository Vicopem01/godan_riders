import classes from "./links.module.css";
import { Link } from "react-router-dom";

const Links = ({ text, svg, arrow, onClick, to }) => {
  return (
    <Link className={classes.main} onClick={onClick} to={to}>
      {svg}
      <div>
        <p>{text}</p>
        {arrow}
      </div>
    </Link>
  );
};
export default Links;
