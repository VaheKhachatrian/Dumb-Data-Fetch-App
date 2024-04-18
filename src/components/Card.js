import React from "react";
import styles from "./Card.module.css";

const ProductCard = ({
  title,
  body = "",
  id,
  email,
  atImageList = false,
  url,
  thumbnailUrl,
}) => {
  // console.log(url);
  return atImageList ? (
    <div>
      <div className={styles.imagePage}>
        <img src={thumbnailUrl} className={styles.thumbnail} alt="Thumbnail" />
        <div style={{ width: "450px" }}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
      <img src={url} className={styles.image} alt="Image" />
    </div>
  ) : (
    <div className={styles.container}>
      {id ? <h2 className={styles.name}>{id}</h2> : null}
      <h2 className={styles.name}>{title}</h2>
      {email ? <h4 className={styles.rating}>{email}</h4> : null}
      <div className={styles.ratingContainer}>
        <span className={styles.rating}>{body}</span>
      </div>
    </div>
  );
};

export default ProductCard;
