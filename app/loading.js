import React from "react";
import styles from "./styles/loader.module.css";
const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
