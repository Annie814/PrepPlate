import React from "react";

import styles from "./Day.module.css";
const Day = ({ dayOfWeek, date, selected }) => {
  return (
    <div className={styles.day}>
      <label className={styles.dayOfWeek}>{dayOfWeek}</label>
      <label className={styles.date}> {date}</label>
    </div>
  );
};

export default Day;
