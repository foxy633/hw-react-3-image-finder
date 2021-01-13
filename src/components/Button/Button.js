import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ changePage }) => (
  <div className={styles.btn}>
    <button onClick={changePage} type="button" className={styles.Button}>
      Load More
    </button>
  </div>
);

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;
