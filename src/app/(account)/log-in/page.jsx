"use client";
import "@/styles/login.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import SignUp from "./_components/SignUp";

export default function SignIn() {
  const router = useRouter();
  const { fetchCurrentUser, currentUser } = useAuthStore();

  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, setErrors }
  ) => {
    try {
      const response = await fetch(`/api/auth/log-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.user.jwt) {
        localStorage.setItem("jwt", data.user.jwt);
        fetchCurrentUser();
        router.push("/dashboard");
      } else {
        throw new Error("JWT not found");
      }
    } catch (error) {
      console.log(error.message);
      setErrors({ submit: error.message || "An unexpected error occurred" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="log-in">
        <div className="_container">
          <div className="log-in__body">
            <h1>Welcome to Holax Group!</h1>
            <h2>
              Please enter your username and password <br />
              to access your account.
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form>
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
                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={
                        touched.password && errors.password ? "invalid" : ""
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error"
                    />
                  </div>
                  <button
                    className="main-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span>Log in</span>
                  </button>

                  {errors.submit && (
                    <div className="error submit-error">{errors.submit}</div>
                  )}

                  <div className="bottom">
                    <div>
                      Forgot your password? Don’t worry!
                      <br />
                      Click the link below to reset it.{" "}
                      <Link className="reset" href="/reset-password">
                        Forgot your password?
                      </Link>
                    </div>
                    <div>
                      New to Holax Group?{" "}
                      <Link className="reset" href="/sign-up">
                        Sign up
                      </Link>{" "}
                      now to join our <br />
                      community and enjoy exclusive benefits and features.
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
