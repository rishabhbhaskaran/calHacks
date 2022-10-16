import React from "react";
import styles from "./GetStartedForm.css";
import { navigate } from "@reach/router";

class GetStartedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      cci: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fullName, cci } = this.state;
    if (fullName && cci) {
      navigate("/overview", {
        state: { fullName, cci },
      });
    } else {
      alert("All fields are required!");
    }
  }

  handleNameChange(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  handleCCIChange(e) {
    this.setState({
      cci: e.target.value,
    });
  }

  handleAgeChange(e) {
    this.setState({
      age: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.blurredContainer} />
        <div className={styles.container}>
          <h1>Please fill in the informations below to get started!</h1>
          <form className={styles.form} onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor="fullName" className={styles.entryLabel}>
              Full Name :{/* eslint-disable */}
              <input
                type="text"
                id="fullName"
                autoFocus
                onChange={(e) => this.handleNameChange(e)}
              />
              {/* eslint-enable */}
            </label>
            {/* eslint-disable-next-line */}
            <label htmlFor="gender" className={styles.entryLabel}>
              CarbonCreditId (CCI):
              <input
                type="text"
                id="cci"
                autoFocus
                onChange={(e) => this.handleCCIChange(e)}
              />
            </label>
            <button className={styles.submitBtn} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default GetStartedForm;
