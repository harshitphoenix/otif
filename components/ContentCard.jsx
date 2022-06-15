import React from "react";
import styles from "./ContentCard.module.css";
const Card = (props) => {
  console.log(props)
  return (
    <div className={`${styles.card} ${props.right?styles.right:styles.left}`}>
      <div className={styles.contentCard} >
        <p className={`${styles.title}`}>{props.title}</p>
        <p className={styles.content}>{props.content}</p>
      </div>
      <div  >
        <img src={props.image} className={styles.image} />
      </div>
    </div>
  );
};

export default Card;
