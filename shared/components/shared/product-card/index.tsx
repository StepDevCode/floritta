import React from "react";
import Link from "next/link";
import Image from "next/image";

import ProductImg from "../../../../public/assets/images/jane-roses.webp";
import styles from "./product-card.module.scss";

interface Props {}

export const ProductCard: React.FC<Props> = () => {
  return (
    <div className={styles.product}>
      <div className={styles.imgBox}>
        <Image
          className={styles.img}
          src={ProductImg}
          width={260}
          height={260}
          alt="product-card"
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.info}>
          <div className={styles.top}>
            <h4 className={styles.title}>Luna</h4>
            <p className={styles.price}>£ 15.23</p>
          </div>
          <p className={styles.descr}>
            Perfect white product for your friend or partner or mother or
            daughter or cat or ghost or man from post or why you read this just
            enough
          </p>
        </div>
        <div className={styles.actions}>
          <Link className={styles.link} href={""}>
            Learn more
          </Link>
          <button className={styles.btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
