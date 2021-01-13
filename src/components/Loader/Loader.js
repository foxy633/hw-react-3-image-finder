import React from "react";
import Loader from "react-loader-spinner";
import styles from "./loader.module.css";

const LoaderComponent = () => (
  <div className={styles.Loader}>
    <Loader
      type="Hearts"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={5000}
    />
  </div>
);

export default LoaderComponent;
