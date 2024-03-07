import css from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ text = "World", subTitle }) => (
  <div>
    {true && <h1 className={css.title}>{text}</h1>}

    <p className={css.subTitle}>{subTitle}</p>
  </div>
);

export default Card;

Card.propTypes = {
  text: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
