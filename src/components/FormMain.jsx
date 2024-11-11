import { useState, useEffect } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function useCountryCode() {
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

  const validationSchema = Yup.object({
    yourName: Yup.string().required("This field is required."),
    email: Yup.string().email("Please enter a valid email address.").required("This field is required."),
    phone: Yup.string().required("This field is required."),
    businessName: Yup.string().required("This field is required."),
    projectDescription: Yup.string().required("This field is required."),
    goals: Yup.string().required("This field is required."),
    contactPreference: Yup.array().min(1, "Please select at least one contact method."),
    bestTimeToReach: Yup.string().required("This field is required."),
    timeline: Yup.string().required("This field is required."),
    budget: Yup.string().required("This field is required."),
  });

  const initialValues = {
    yourName: "",
    email: "",
    phone: "",
    projectName: "",
    businessName: "",
    projectDescription: "",
    goals: "",
    contactPreference: [],
    bestTimeToReach: "",
    timeline: "",
    budget: "",
    additionalDetails: "",
  };

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

  return (
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
                      className={form.touched.email && form.errors.email ? "invalid" : ""}
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
                      className={form.touched.email && form.errors.email ? "invalid" : ""}
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
                          className={field.value.includes("email") ? "_active" : ""}
                        >
                          <input
                            type="checkbox"
                            checked={field.value.includes("email")}
                            onChange={() => {
                              const set = new Set(field.value);
                              set.has("email") ? set.delete("email") : set.add("email");
                              form.setFieldValue(field.name, Array.from(set));
                            }}
                          />
                          Email
                        </label>
                        <label
                          className={field.value.includes("phone") ? "_active" : ""}
                        >
                          <input
                            type="checkbox"
                            checked={field.value.includes("phone")}
                            onChange={() => {
                              const set = new Set(field.value);
                              set.has("phone") ? set.delete("phone") : set.add("phone");
                              form.setFieldValue(field.name, Array.from(set));
                            }}
                          />
                          Phone
                        </label>
                        <label
                          className={field.value.includes("other") ? "_active" : ""}
                        >
                          <input
                            type="checkbox"
                            checked={field.value.includes("other")}
                            onChange={() => {
                              const set = new Set(field.value);
                              set.has("other") ? set.delete("other") : set.add("other");
                              form.setFieldValue(field.name, Array.from(set));
                            }}
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
}

export default FormMain;