import Image from "next/image";
import { assets } from "@/components/assets";
import styles from "@/styles/login.module.css"; // Create this CSS module

export default function Login() {
  return (
    <div className={styles.loginWrapper}>
      <Image
        src={assets.innoAPEbg}
        alt="Login background"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.formContainer}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Username" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
