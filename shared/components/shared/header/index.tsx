import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Search } from "../search";
import { Cart } from "../cart";

import Logo from "@/public/logo.svg";
import Favorites from "@/public/assets/images/icons/favorites.svg";
import User from "@/public/assets/images/icons/user.svg";
import styles from "./header.module.scss";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"}>
          <Image src={Logo} width={150} height={20} alt="logo" priority />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Flowers
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Plants
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Occasions
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Subscriptions
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Hampers & Gifts
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                For customers
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href={"/"}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.actions}>
          <li>
            <Search />
          </li>
          <li>
            <Link href={""}>
              <Image src={Favorites} width={24} height={24} alt="favorites" />
            </Link>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <Link href={""}>
              <Image src={User} width={24} height={24} alt="favorites" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
