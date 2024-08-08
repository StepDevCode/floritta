import React from "react";
import Link from "next/link";

import styles from "./footer.module.scss";

interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <h5 className={styles.title}>Delivery</h5>
          <li>
            <Link className={styles.link} href={""}>
              Same day London
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Fulham and Hammersmith
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Next day flowers UK
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Delivery all over London
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              UK wide delivery
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <h5 className={styles.title}>Subscription</h5>
          <li>
            <Link className={styles.link} href={""}>
              Seasonal gift
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Subscription luxury
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Subscription birthday
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Romance gift subscription
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Home subscription
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <h5 className={styles.title}>By flowers</h5>
          <li>
            <Link className={styles.link} href={""}>
              Roses
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Peonies
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Orchids
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Gerbera
            </Link>
          </li>{" "}
          <li>
            <Link className={styles.link} href={""}>
              Hydrangea
            </Link>
          </li>
        </ul>
        <ul className={styles.list}>
          <h5 className={styles.title}>Legal documents</h5>
          <li>
            <Link className={styles.link} href={""}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Refund Policy
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Shipping Policy
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={""}>
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
