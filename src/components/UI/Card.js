import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // to get the class from the js
  return <div className={classes}>{props.children}</div>;
};

export default Card;
