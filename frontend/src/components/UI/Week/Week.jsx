import React, { useState } from "react";
import Day from "./Day/Day";
import styles from "./Week.module.css";
const Week = ({ isStatic }) => {
  const initialWeekState = [
    { key: 0, dayOfWeek: "Mon", date: 7, selected: false },
    { key: 1, dayOfWeek: "Tue", date: 8, selected: false },
    { key: 2, dayOfWeek: "Wed", date: 9, selected: false },
    { key: 3, dayOfWeek: "Thu", date: 10, selected: false },
    { key: 4, dayOfWeek: "Fri", date: 11, selected: false },
    { key: 5, dayOfWeek: "Sat", date: 12, selected: false },
    { key: 6, dayOfWeek: "Sun", date: 13, selected: false },
  ];
  const [weekState, setWeekState] = useState(initialWeekState);

  return (
    <div className={styles.container}>
      {weekState.map((day) => (
        <Day
          key={day.key}
          dayOfWeek={day.dayOfWeek}
          date={day.date}
          selected={day.selected}
        />
      ))}
    </div>
  );
};

export default Week;
