"use client";
import "@/styles/account.scss";
import "@/styles/login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BackIcon from "@/icons/BackIcon";
import Link from "next/link";

export default function PasswordResetRequest() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}auth/forgot-password`,
        {
          email: values.email,
        }
      );

      if (response.status === 200) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error("An error occurred:", error.response);
      setStatus({ success: false });
    }
  };

  return (
    <section className="log-in ">
      <div className="_container">
        <div className="log-in__body">
          <h1>Reset Your Password</h1>
          <h2>
            Please enter your email address, and we will <br />
            send you the steps to reset your password.
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors, status }) => (
              <Form className="reset-form">
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={touched.email && errors.email ? "invalid" : ""}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <button
                  className="main-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>Reset now</span>
                </button>
                {status && status.success && (
                  <div className="success">
                    <p>
                      A link to reset your password has been sent to your email.
                      Please check your inbox and follow the instructions to
                      proceed.
                    </p>
                  </div>
                )}
                {status && status.success === false && (
                  <div className="error">
                    <p>An error occurred. Please try again.</p>
                  </div>
                )}
              </Form>
            )}
          </Formik>
          <Link className="back" href="/log-in">
            <BackIcon />
            Go back
          </Link>
        </div>
      </div>
    </section>
  );
}
