"use client";

import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
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
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), formData);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Registration failed.");
    }
  };

  return (
    <div className={styles.registerWrapper}>
      <h2 className={styles.formTitle}>Employee Registration</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Personal Information Section */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Personal Information</h3>
          <div className={styles.nameGrid}>
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
            <div className={styles.inputGroup}>
              <label htmlFor="middlename" className={styles.label}>
                MI
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
        </div>

        {/* Employee Details Section */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Employee Details</h3>
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
        </div>

        {/* Contact Information Section */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Contact Information</h3>
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
        </div>

        <button type="submit" className={styles.submitButton}>
          Register Employee
        </button>
      </form>
    </div>
  );
}
