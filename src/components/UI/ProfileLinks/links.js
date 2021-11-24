import classes from "./links.module.css";

const Links = ({ text, svg, arrow, onClick }) => {
  return (
    <div className={classes.main} onClick={onClick}>
      {svg}
      <div>
        <p>{text}</p>
        {arrow}
      </div>
    </div>
  );
};
export default Links;