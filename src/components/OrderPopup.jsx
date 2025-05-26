"use client";
import React from "react";
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
import { excludedCountries } from "@/utils/countries";

function OrderPopup() {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue, serviceType } =
    usePopupStore();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please, enter valid email")
      .required("This field is required"),
    phone: Yup.string().required("This field is required"),
    service: Yup.string().required("This field is required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    service: serviceValue,
    message: "",
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
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
                        {serviceType == "service" ? (
                          <>
                            <h2>Service Request</h2>
                            <p>
                              Ready to enhance your business? Complete the form
                              below to request your customised business
                              consulting solution from Holax Group.
                            </p>
                            <span className="service">
                              <b>Selected Service:</b> {serviceValue}
                            </span>
                          </>
                        ) : (
                          <>
                            <h2>Ready-made plan request</h2>
                            <p>
                              Interested in our ready-made plan? Complete the
                              form below, and our specialists will contact you
                              to discuss all the essential details.
                            </p>
                            <span className="service">
                              <b>Request:</b> {serviceValue}
                            </span>
                          </>
                        )}

                        <Field type="hidden" name="service" />
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

export default OrderPopup;
