import React from "react";
import styles from "./table.module.css";

import { top_filled, bottom_filled } from "../../constants/Images";

function Table(data) {
  let top_left;
  let bottom_left;

  function generateRandomId(arr, diff_key) {
    const random_id = Math.floor(Math.random() * arr.length);
    if (random_id === diff_key) return generateRandomId(arr, diff_key);
    return random_id;
  }

  function getRandomChair(c_name) {
    if (c_name === "TL") {
      const random_id = generateRandomId(top_filled);
      const random_image = top_filled[random_id];
      top_left = random_id;
      return random_image;
    }

    if (c_name === "BL") {
      const random_id = generateRandomId(bottom_filled);
      const random_image = bottom_filled[random_id];
      bottom_left = random_id;
      return random_image;
    }

    if (c_name === "TR") {
      const random_id = generateRandomId(top_filled, top_left);
      const random_image = top_filled[random_id];
      return random_image;
    }

    if (c_name === "BR") {
      const random_id = generateRandomId(bottom_filled, bottom_left);
      const random_image = bottom_filled[random_id];
      return random_image;
    }
  }

  return (
    <div className={styles.container}>
      <img src={getRandomChair("TL")} alt="" className={styles.top_chair} />
      <img
        src={getRandomChair("TR")}
        alt=""
        className={`${styles.top_chair} ${styles.opposite}`}
      />
      <img src={getRandomChair("BL")} alt="" className={styles.bottom_chair} />
      <img
        src={getRandomChair("BR")}
        alt=""
        className={`${styles.bottom_chair} ${styles.opposite}`}
      />
    </div>
  );
}

export default Table;
