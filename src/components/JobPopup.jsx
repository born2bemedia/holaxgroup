"use client";
import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import usePopupStore from "@/stores/popupStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ChevronDown from "@/icons/other/ChevronDown";
import { excludedCountries } from "@/utils/countries";

function JobPopup() {
  const { jobsPopupDisplay, setJobsPopupDisplay, jobValue } = usePopupStore();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please, enter valid email")
      .required("This field is required"),
    phone: Yup.string().required("This field is required"),
    position: Yup.string().required("This field is required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    position: jobValue,
    message: "",
    resume: null,
    portfolio: null,
  };

  const closePopup = (resetForm) => {
    setJobsPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    let resumeData = null;
    if (values.resume) {
      resumeData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
            filename: values.resume.name, // Get the filename
            mimetype: values.resume.type, // Get the MIME type
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(values.resume);
      });
    }

    let portfolioData = null;
    if (values.portfolio) {
      portfolioData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(";base64,").pop(), // Get only the base64 part
            filename: values.portfolio.name, // Get the filename
            mimetype: values.portfolio.type, // Get the MIME type
          });
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(values.portfolio);
      });
    }

    const payload = {
      ...values,
      resume: resumeData,
      portfolio: portfolioData,
    };

    try {
      const response = await fetch("/api/emails/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
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
    <div className={`order-popup-wrap ${jobsPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
          values,
        }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <svg
                className="popup-close"
                onClick={() => closePopup(resetForm)}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18.5L2 2.5M18 2.5L2 18.5"
                  stroke="#fff"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="form-wrap">
                  <Form>
                    {!status && (
                      <div className="form-inner">
                        <h2>Ready to join Holax Group?</h2>
                        <p>
                          Fill out the form below to submit your application!
                        </p>
                        <span className="service">
                          <b>Job:</b> {jobValue}
                        </span>

                        <Field type="hidden" name="position" />
                        <div className="full">
                          <Field
                            name="fullName"
                            type="text"
                            placeholder="Your Full Name"
                            className={
                              touched.fullName && errors.fullName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <PhoneInput
                            country={"us"}
                            excludeCountries={excludedCountries}
                            value=""
                            placeholder="Your Contact Number"
                            onChange={(phone) => setFieldValue("phone", phone)}
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Your Email Address"
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="form-block full">
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById("resume").click()
                              }
                            >
                              <span className="fileName">
                                {values.resume
                                  ? values.resume.name
                                  : "Upload Resume (PDF or Word)"}
                              </span>
                              <span>
                                Choose file <ChevronDown />
                              </span>
                            </span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "resume",
                                  event.currentTarget.files[0]
                                );
                              }}
                              style={{ display: "none" }}
                            />
                            <ErrorMessage name="resume" component="span" />
                          </div>
                        </div>

                        <div className="form-block full">
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById("portfolio").click()
                              }
                            >
                              <span className="fileName">
                                {values.portfolio
                                  ? values.portfolio.name
                                  : "Upload Portfolio (if applicable)"}
                              </span>
                              <span>
                                Choose file <ChevronDown />
                              </span>
                            </span>
                            <input
                              id="portfolio"
                              name="portfolio"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "portfolio",
                                  event.currentTarget.files[0]
                                );
                              }}
                              style={{ display: "none" }}
                            />
                            <ErrorMessage name="portfolio" component="span" />
                          </div>
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            as="textarea"
                            placeholder="Your Message"
                            className={
                              touched.message && errors.message ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="main-button"
                          disabled={isSubmitting}
                        >
                          <span>Send</span>
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>Your request has been sent successfully.</h3>
                        <p>We will contact you soon!</p>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default JobPopup;
