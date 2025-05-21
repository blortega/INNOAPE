"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { assets } from "@/components/assets";
import styles from "@/styles/forgot-password.module.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address" });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage({
        type: "success",
        text: "Password reset email sent! Check your inbox for instructions.",
      });
      setEmail("");
    } catch (error: any) {
      let errorMessage = "Failed to send password reset email";

      // Handle specific Firebase error codes
      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email address";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Please enter a valid email address";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many attempts. Please try again later";
      }

      setMessage({ type: "error", text: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.resetContainer}>
        <div className={styles.logoSection}>
          <Image
            src={assets.innoAPE}
            alt="Company Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <h1 className={styles.companyName}>InnoAPE</h1>
        </div>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Reset Your Password</h2>
          <p className={styles.formDescription}>
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className={styles.resetForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            {message.text && (
              <div
                className={`${styles.message} ${
                  message.type === "error"
                    ? styles.errorMessage
                    : styles.successMessage
                }`}
              >
                <p>{message.text}</p>
              </div>
            )}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>

            <Link href="/login" className={styles.backToLogin}>
              Back to Login
            </Link>
          </form>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={assets.innoAPEbg}
          alt="Reset password background"
          fill
          priority
          className={styles.bgImage}
          objectFit="cover"
        />
        <div className={styles.overlay}></div>
        <div className={styles.welcomeText}>
          <h2>Forgot Your Password?</h2>
          <p>No worries! We'll help you get back into your account safely.</p>
        </div>
      </div>
    </div>
  );
}
