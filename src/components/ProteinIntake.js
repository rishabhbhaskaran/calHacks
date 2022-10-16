import React from "react";
import styles from "./IntakeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEgg } from "@fortawesome/free-solid-svg-icons";

const ProteinIntake = (props) => {
  const qty = 200;
  return (
    <div className={styles.item}>
      <h2>Your Carbon Credit Score</h2>
      <FontAwesomeIcon icon={faEgg} />
      <meter
        className={styles.meter}
        min="0"
        max="350"
        value={qty}
        id={styles.protein}
      />
      <span>Work on reducing 20 kg of carbon footprint</span>
      <p>
        Carbon Credit Score is a numerical expression based on a level analysis of a person's carbon emitting activities.
      </p>
    </div>
  );
};

export default ProteinIntake;
