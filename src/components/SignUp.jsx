import React, { useState } from "react";
import brand from "./kindpng.png";
import styles from "./css/signup.module.css";
const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className={styles.main1}>
      <div className={styles.subdiv}>
        <img src={brand} alt="" className={styles.leaf} />
      </div>
      <div className={styles.subdiv1}>
        <h1>Create your account</h1>
      </div>
      <div className={styles.subdiv2}>
        <form>
          <div className={styles.input_div}>
            <input
              type="text"
              className={styles.input}
              placeholder="Name"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="text"
              className={styles.input}
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.submission_div}>
            <button
              type="submit"
              className={styles.submission_button}
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
