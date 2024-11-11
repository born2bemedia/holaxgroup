import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialValues = {
  yourName: "",
  email: "",
  phone: "",
  projectName: "",
  projectDescription: "",
  businessName: "",
  contactPreference: [],
  bestTimeToReach: "",
  timeline: "",
  budget: "",
  additionalDetails: "",
};

const validationSchema = Yup.object().shape({
  yourName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  projectName: Yup.string().required("Required"),
  projectDescription: Yup.string().required("Required"),
  businessName: Yup.string().required("Required"),
  contactPreference: Yup.array().min(1, "Select at least one contact method"),
  bestTimeToReach: Yup.string(),
  timeline: Yup.string(),
  budget: Yup.string(),
  additionalDetails: Yup.string(),
});

const FormMain = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const countryCode = "us";

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      if (response.ok) {
        setSubmitting(false)
        resetForm()
        setStatus({ success: true })
        setIsSuccess(true)
        setIsFormVisible(false)
      } else {
        setStatus({ success: false })
      }
    } catch (error) {
      console.error(error)
      setStatus({ success: false })
      setSubmitting(false)
    }
  };

  const contactMethods = ["email", "phone", "other"];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <div className="wrapper">
          {isFormVisible && (
            <Form className="form">
              {Object.keys(errors).length > 0 && Object.values(touched).some((t) => t) && (
                <span className="general-error">Please fill in all required fields.</span>
              )}

              <div className="row row-01">
                <Field name="yourName">
                  {({ field, form }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Your Full Name"
                      className={form.touched.yourName && form.errors.yourName ? "invalid" : ""}
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
                      className={form.touched.email && form.errors.email ? "invalid" : ""}
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
                      className={form.touched.phone && form.errors.phone ? "invalid" : ""}
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
                      className={form.touched.projectName && form.errors.projectName ? "invalid" : ""}
                    />
                  )}
                </Field>
              </div>

              <div className="row row-05">
                <Field name="projectDescription">
                  {({ field, form }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Briefly Describe Your Project or Business Needs"
                      className={form.touched.projectDescription && form.errors.projectDescription ? "invalid" : ""}
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
                      className={form.touched.businessName && form.errors.businessName ? "invalid" : ""}
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
                        {contactMethods.map((method) => (
                          <label key={method} className={field.value.includes(method) ? "_active" : ""}>
                            <input
                              type="checkbox"
                              checked={field.value.includes(method)}
                              onChange={() => {
                                const set = new Set(field.value);
                                set.has(method) ? set.delete(method) : set.add(method);
                                form.setFieldValue(field.name, Array.from(set));
                              }}
                            />
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                          </label>
                        ))}
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
                      placeholder="When Is the Best Time to Reach You?"
                      className={form.touched.bestTimeToReach && form.errors.bestTimeToReach ? "invalid" : ""}
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
                      className={form.touched.timeline && form.errors.timeline ? "invalid" : ""}
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
                      className={form.touched.budget && form.errors.budget ? "invalid" : ""}
                    />
                  )}
                </Field>
              </div>

              <div className="row row-11">
                <Field name="additionalDetails">
                  {({ field, form }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Any Other Details or Specific Requirements You'd Like to Share"
                      className={form.touched.additionalDetails && form.errors.additionalDetails ? "invalid" : ""}
                    />
                  )}
                </Field>
              </div>

              <button type="submit" className="button" disabled={isSubmitting}>
                Submit Inquiry
              </button>
            </Form>
          )}
          {isSuccess && (
            <div className="success-message">
              <span>Thank you for choosing Holax Group!</span> Our representative will reach out shortly.
            </div>
          )}
        </div>
      )}
    </Formik>
  );
};

export default FormMain;