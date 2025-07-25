"use client";
import "@/styles/login.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import CheckboxIcon from "@/icons/CheckboxIcon";

export default function SignUp() {
  const [thanksPopupShow, setThanksPopupShow] = useState(false);
  const router = useRouter();
  const { fetchCurrentUser } = useAuthStore();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    username: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    const userData = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.email,
      phone: "",
    };

    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!data.jwt) {
        throw new Error("JWT not found");
      }

      setThanksPopupShow(true);

      // Надсилаємо email
      try {
        await fetch("/api/emails/sign-up", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      } catch (error) {
        console.error(error);
      }

      setTimeout(() => {
        setThanksPopupShow(false);
        localStorage.setItem("jwt", data.jwt);
        fetchCurrentUser(); // Оновлюємо користувача через Zustand
        router.push("/dashboard");
      }, 3000);
    } catch (error) {
      console.error(
        "Registration failed",
        error.response?.data || error.message
      );
      setFieldError("email", "An account with this email already exists");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="no-account">Do not have an account? Register now!</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, values }) => (
          <Form>
            {/* Form Fields */}
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder="First name"
                className={
                  touched.firstName && errors.firstName ? "invalid" : ""
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>
            <div>
              <Field
                type="text"
                name="lastName"
                placeholder="Last name"
                className={touched.lastName && errors.lastName ? "invalid" : ""}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={touched.email && errors.email ? "invalid" : ""}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Password and Confirm Password */}
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={touched.password && errors.password ? "invalid" : ""}
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className={
                  touched.confirmPassword && errors.confirmPassword
                    ? "invalid"
                    : ""
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            {/* Terms, Privacy, Age */}
            <div className="checkbox">
              <Field
                type="checkbox"
                name="terms"
                className={touched.terms && errors.terms ? "invalid" : ""}
                id="terms"
              />
              <label htmlFor="terms">
                <CheckboxIcon />
                <span>
                  I agree to the{" "}
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>{" "}
                  and <Link href="/privacy-policy">Privacy Policy</Link>
                </span>
              </label>
              <ErrorMessage name="terms" component="div" className="error" />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" disabled={isSubmitting}>
                Create Account
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {thanksPopupShow && (
        <div className="success">
          Your account has been successfully created! You can now log in using
          your email and password.
        </div>
      )}
    </>
  );
}
