import React from "react";
import brand from "./kindpng.png";
import styles from "./css/home.module.css";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.subdiv}>
        <div className={styles.left_div}></div>
        <div className={styles.leaf_div}>
          <img src={brand} alt="" className={styles.leaf} />
        </div>
        <div className={styles.subdiv_button}>
          <Link to="signIn">
            <button className={styles.Loginbutton}>Login</button>
          </Link>
        </div>
      </div>

      <div className={styles.subdiv1}>
        <h1>See other users experience around the world right now.</h1>
      </div>
      <div className={styles.subdiv2}>
        <Link to="signUp">
          <button className={styles.create_account_button}>
            Create an account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
