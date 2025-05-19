"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { assets } from "@/components/assets";
import styles from "@/styles/register.module.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    employeeid: "",
    gender: "",
    birthdate: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Convert name fields and employeeid to uppercase
    if (
      name === "firstname" ||
      name === "middlename" ||
      name === "lastname" ||
      name === "employeeid"
    ) {
      setFormData({ ...formData, [name]: value.toUpperCase() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Make sure required fields are present
      if (
        !formData.firstname ||
        !formData.lastname ||
        !formData.email ||
        !formData.password ||
        !formData.employeeid
      ) {
        alert("Please fill all required fields");
        return;
      }

      // Initialize Firebase Auth
      const auth = getAuth();

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Update user profile with name
      await updateProfile(user, {
        displayName: `${formData.firstname} ${formData.lastname}`,
      });

      // Prepare user data for Firestore (exclude password and confirmPassword)
      const { password, confirmPassword, ...userData } = formData;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        ...userData,
        uid: user.uid,
        createdAt: serverTimestamp(),
        active: true,
      });

      console.log("User created successfully with ID: ", user.uid);
      alert("Employee registered successfully!");

      // Clear form data after successful submission
      setFormData({
        firstname: "",
        middlename: "",
        lastname: "",
        employeeid: "",
        gender: "",
        birthdate: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Reset to first step
      setFormStep(1);

      // Redirect to login page
      // window.location.href = "/login";
    } catch (error) {
      console.error("Error registering user: ", error);

      // Handle specific Firebase auth errors
      if (error instanceof Error) {
        if (error.message.includes("email-already-in-use")) {
          alert("Registration failed: This email is already registered");
        } else if (error.message.includes("weak-password")) {
          alert(
            "Registration failed: Password should be at least 6 characters"
          );
        } else {
          alert("Registration failed: " + error.message);
        }
      } else {
        alert("Registration failed: Unknown error occurred");
      }
    }
  };

  const nextStep = () => {
    if (formStep === 1) {
      // Validate first step
      if (!formData.firstname || !formData.lastname || !formData.email) {
        alert("Please fill all required fields");
        return;
      }

      // Simple email validation
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert("Please enter a valid email address");
        return;
      }
    } else if (formStep === 2) {
      // Validate second step
      if (!formData.employeeid || !formData.gender || !formData.birthdate) {
        alert("Please fill all required fields");
        return;
      }
    }

    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.registerContainer}>
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
          <h2 className={styles.formTitle}>Employee Registration</h2>

          <div className={styles.progressIndicator}>
            <div
              className={`${styles.progressStep} ${
                formStep >= 1 ? styles.active : ""
              }`}
            >
              <div className={styles.stepNumber}>1</div>
              <span className={styles.stepLabel}>Personal Info</span>
            </div>
            <div className={styles.progressLine}></div>
            <div
              className={`${styles.progressStep} ${
                formStep >= 2 ? styles.active : ""
              }`}
            >
              <div className={styles.stepNumber}>2</div>
              <span className={styles.stepLabel}>Employment</span>
            </div>
            <div className={styles.progressLine}></div>
            <div
              className={`${styles.progressStep} ${
                formStep >= 3 ? styles.active : ""
              }`}
            >
              <div className={styles.stepNumber}>3</div>
              <span className={styles.stepLabel}>Account</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.registerForm}>
            {formStep === 1 && (
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>Personal Information</h3>

                <div className={styles.inputGroup}>
                  <label htmlFor="firstname" className={styles.label}>
                    First Name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    placeholder="Enter first name"
                    onChange={handleChange}
                    value={formData.firstname}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="middlename" className={styles.label}>
                      Middle Initial
                    </label>
                    <input
                      id="middlename"
                      name="middlename"
                      placeholder="MI"
                      onChange={handleChange}
                      value={formData.middlename}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="lastname" className={styles.label}>
                      Last Name
                    </label>
                    <input
                      id="lastname"
                      name="lastname"
                      placeholder="Enter last name"
                      onChange={handleChange}
                      value={formData.lastname}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    onChange={handleChange}
                    value={formData.email}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formButtons}>
                  <button
                    type="button"
                    onClick={nextStep}
                    className={styles.nextButton}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>Employment Details</h3>

                <div className={styles.inputGroup}>
                  <label htmlFor="employeeid" className={styles.label}>
                    Employee ID
                  </label>
                  <input
                    id="employeeid"
                    name="employeeid"
                    placeholder="Enter employee ID"
                    onChange={handleChange}
                    value={formData.employeeid}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="gender" className={styles.label}>
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      onChange={handleChange}
                      value={formData.gender}
                      className={styles.select}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Prefer not to say</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="birthdate" className={styles.label}>
                      Date of Birth
                    </label>
                    <input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      onChange={handleChange}
                      value={formData.birthdate}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formButtons}>
                  <button
                    type="button"
                    onClick={prevStep}
                    className={styles.backButton}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className={styles.nextButton}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {formStep === 3 && (
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>Account Setup</h3>

                <div className={styles.inputGroup}>
                  <label htmlFor="password" className={styles.label}>
                    Password
                  </label>
                  <div className={styles.passwordInputWrapper}>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      onChange={handleChange}
                      value={formData.password}
                      className={styles.input}
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className={styles.passwordToggle}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="confirmPassword" className={styles.label}>
                    Confirm Password
                  </label>
                  <div className={styles.passwordInputWrapper}>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      onChange={handleChange}
                      value={formData.confirmPassword}
                      className={styles.input}
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className={styles.passwordToggle}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className={styles.formButtons}>
                  <button
                    type="button"
                    onClick={prevStep}
                    className={styles.backButton}
                  >
                    Back
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    Complete Registration
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className={styles.loginPrompt}>
            <p>Already have an account?</p>
            <Link href="/login" className={styles.loginLink}>
              Log in here
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={assets.innoAPEbg}
          alt="Registration background"
          fill
          priority
          className={styles.bgImage}
          objectFit="cover"
        />
        <div className={styles.overlay}></div>

        <div className={styles.employeeIllustration}>
          <Image
            src={assets.employeeSVG}
            alt="Employee illustration"
            width={400}
            height={400}
            className={styles.employeeImage}
          />
        </div>

        <div className={styles.welcomeText}>
          <h2>Join Our Team!</h2>
          <p>
            Complete your registration to access employee resources and begin
            your journey with us.
          </p>
        </div>
      </div>
    </div>
  );
}
