import { useState, useEffect } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import usePopupStore from "@/stores/popupStore";
import ThanksPopup from "./ThanksPopup";

function useCountryCode() {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();
  const [countryCode, setCountryCode] = useState("us");

  useEffect(() => {
    setCountryCode("us");
  }, []);

  return countryCode;
}

function FormMain() {
  const countryCode = useCountryCode();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  const validationSchema = Yup.object({
    yourName: Yup.string().required("This field is required.1"),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("This field is required.2"),
    phone: Yup.string().required("This field is required.3"),
    businessName: Yup.string().required("This field is required.4"),
    projectDescription: Yup.string().required("This field is required.5"),
    contactPreference: Yup.string().required("Please select a contact method."),
    bestTimeToReach: Yup.string().required("This field is required.7"),
    timeline: Yup.string().required("This field is required.8"),
    budget: Yup.string().required("This field is required.9"),
  });

  const initialValues = {
    yourName: "",
    email: "",
    phone: "",
    projectName: "",
    businessName: "",
    projectDescription: "",
    contactPreference: [],
    bestTimeToReach: "",
    timeline: "",
    budget: "",
    additionalDetails: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
        setIsSuccess(true);
        setThanksPopupDisplay(true);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, errors, touched }) => (
          <div className="wrapper">
            {isFormVisible && (
              <Form className="form">
                {Object.keys(errors).length > 0 && touched && (
                  <span className="general-error">
                    Please fill in all required fields.
                  </span>
                )}
                <div className="row row-01">
                  <Field name="yourName">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Your Full Name"
                        className={
                          form.touched.yourName && form.errors.yourName
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-02">
                  <Field name="email">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="email"
                        placeholder="Your Email Address"
                        className={
                          form.touched.email && form.errors.email
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-03">
                  <Field name="phone">
                    {({ field, form }) => (
                      <PhoneInput
                        country={countryCode}
                        value={field.value}
                        onChange={(value) => form.setFieldValue("phone", value)}
                        placeholder="Your Contact Number"
                        className={
                          form.touched.phone && form.errors.phone
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-04">
                  <Field name="projectName">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="Your Business or Project Name"
                        className={
                          form.touched.email && form.errors.email
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-05">
                  <Field name="projectDescription">
                    {({ field, form }) => (
                      <input
                        {...field}
                        placeholder="Briefly Describe Your Project or Business Needs"
                        className={
                          form.touched.projectDescription &&
                          form.errors.projectDescription
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-06">
                  <Field name="businessName">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="What Are Your Main Goals and Objectives?"
                        className={
                          form.touched.email && form.errors.email
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-07 _checkboxes">
                  <h2 className="row-title">Preferred Contact Method</h2>
                  <div className="wrapper">
                    <Field name="contactPreference">
                      {({ field, form }) => (
                        <>
                          <label
                            className={field.value === "email" ? "_active" : ""}
                          >
                            <input
                              type="radio"
                              name="contactPreference"
                              value="email"
                              checked={field.value === "email"}
                              onChange={() =>
                                form.setFieldValue(field.name, "email")
                              }
                            />
                            Email
                          </label>
                          <label
                            className={field.value === "phone" ? "_active" : ""}
                          >
                            <input
                              type="radio"
                              name="contactPreference"
                              value="phone"
                              checked={field.value === "phone"}
                              onChange={() =>
                                form.setFieldValue(field.name, "phone")
                              }
                            />
                            Phone
                          </label>
                          <label
                            className={field.value === "other" ? "_active" : ""}
                          >
                            <input
                              type="radio"
                              name="contactPreference"
                              value="other"
                              checked={field.value === "other"}
                              onChange={() =>
                                form.setFieldValue(field.name, "other")
                              }
                            />
                            Other
                          </label>
                        </>
                      )}
                    </Field>
                  </div>
                </div>

                <div className="row row-08 _textarea">
                  <Field name="bestTimeToReach">
                    {({ field, form }) => (
                      <textarea
                        {...field}
                        type="text"
                        placeholder="When Is the Best Time to Reach You?"
                        className={
                          form.touched.bestTimeToReach &&
                          form.errors.bestTimeToReach
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-09">
                  <Field name="timeline">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="What Is Your Expected Timeline for This Project?"
                        className={
                          form.touched.timeline && form.errors.timeline
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-10">
                  <Field name="budget">
                    {({ field, form }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder="What Is Your Budget Range for This Project?"
                        className={
                          form.touched.budget && form.errors.budget
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <div className="row row-11">
                  <Field name="additionalDetails">
                    {({ field, form }) => (
                      <input
                        {...field}
                        placeholder="Any Other Details or Specific Requirements You'd Like to Share"
                        className={
                          form.touched.additionalDetails &&
                          form.errors.additionalDetails
                            ? "invalid"
                            : ""
                        }
                      />
                    )}
                  </Field>
                </div>
                <button
                  type="submit"
                  className="button"
                  disabled={isSubmitting}
                >
                  Submit Inquiry
                </button>
                {isSubmitting && (
                  <div
                    className="loading"
                    style={{ margin: "10px auto 0 auto" }}
                  >
                    <img src="/images/loading.svg" />
                  </div>
                )}
              </Form>
            )}
            {/*isSuccess && (
            <div className="success-message">
              <span>Thank you for choosing Holax Group!</span> Our
              representative will reach out shortly.
            </div>
          )*/}
          </div>
        )}
      </Formik>
      <ThanksPopup />
    </>
  );
}

export default FormMain;
