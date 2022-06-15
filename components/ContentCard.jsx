import React from "react";
import styles from "./ContentCard.module.css";
const Card = (props) => {
  return (
    <div style={{alignSelf:'center'}} className={`row ${props.right?styles.right:styles.left}`}>
      <div className="col-4">
        <p className={`${styles.title}`}>{props.title}</p>
        <p className={styles.content}>{props.content}</p>
      </div>
      <div className="col-4">
        <img src={`./${props.image}`} className={styles.image} />
      </div>
    </div>
  );
};

export default Card;
