import Image from "next/image";
import { assets } from "@/components/assets";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.transitionContainer}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImageContainer}>
              <Image
                src={assets.innoAPE}
                alt="innoAPE cross logo"
                width={150}
                height={150}
                priority
                className={styles.logo}
              />
            </div>
            <div className={styles.brandingContainer}>
              <h1 className={styles.brandName}>
                <span className={styles.innoPart}>inno</span>
                <span className={styles.apePart}>APE</span>
              </h1>

              <div className={styles.byLine}>
                <span className={styles.byText}>by</span>
                <span className={styles.innodataIconWrapper}>
                  <Image
                    src={assets.innodataIcon}
                    alt="Innodata icon"
                    width={20}
                    height={20}
                    priority
                    className={styles.innodataIcon}
                  />
                </span>
                <span className={styles.innodataText}>Innodata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
