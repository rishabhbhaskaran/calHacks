import React from "react";
import styles from "./IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

const FatIntake = (props) => {
  return (
    <div className={styles.item}>
      <h2>See how You can make a difference</h2>
      <FontAwesomeIcon icon={faFeather} />
      <p></p>
      <p>
        What are our option? Is the world beyond saving?
      </p>
    </div>
  );
};

export default FatIntake;
