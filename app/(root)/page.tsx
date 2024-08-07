import Link from "next/link";

import styles from "./styles.module.scss";
import HeroImage from "../../public/assets/images/hero.png";

export default async function Home() {
  return (
    <main>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className={styles.container}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              <span className={styles.word}>Flowers</span>
              <span className={styles.word}>delivery</span>
              <span className={styles.word}>in London And UK</span>
            </h1>
            <p className={styles.text}>
              Short text about our shop and than we deliver in London, can
              deliver same day, and have deliver for all Great Britain and
              something more
            </p>
            <div className={styles.links}>
              <Link className={styles.link} href={""}>
                Go to shop
              </Link>
              <Link className={styles.link} href={""}>
                Order shiping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
