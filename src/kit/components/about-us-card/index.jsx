import React from 'react';
import styles from "./style.module.css";

const AboutUsCard = () => {
  return (
    <div className={styles['about-us-card']}>
      <span className={styles.icon} />
      <h2 className={styles.title}>
        About us
      </h2>
      <p className={styles.description}>
        Vel porta ornare fermentum fames at non. Proin nunc, sagittis faucibus sagittis fringilla amet eget
        posuere. Tincidunt ultrices lectus nunc, eget. Tempus, viverra libero ac mauris lacus, risus. Pharetra
        odio eu morbi ac aliquet sem ultrices etiam sit.
      </p>
    </div>
  );
};

export default AboutUsCard;