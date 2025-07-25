"use client";
import "@/styles/checkout.scss";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useCartStore from "@/stores/cartStore"; // Zustand cart store
import useAuthStore from "@/stores/authStore"; // Zustand auth store
import useOrderStore from "@/stores/orderStore"; // Zustand order store
import CheckboxIconBlack from "@/icons/CheckboxIconBlack";
import { excludedCountries } from "@/utils/countries";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    color: "#333",
    height: "50px",
    borderRadius: "30px",
    background: "#F1F1F1",
    border: state.isFocused ? "1px solid #134CB2" : "1px solid #134CB2",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.2",
    textAlign: "left",
    padding: "0 20px",
    boxShadow: "unset",
    fontStyle: "italic",
    "&:hover": {
      borderColor: "#134CB2",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "50px",
    margin: "0",
    padding: "0",
    border: "none",
  }),
  input: (provided) => ({
    ...provided,
    height: "50px",
    margin: "0",
    padding: "0",
    border: "none",
    color: "#1E1E1E",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1E1E1E",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    "> span": {
      display: "none",
    },
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  menu: (provided) => ({
    ...provided,
    background: "#ffffff0d",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#F2F2F2" : "#F2F2F2",
    color: "#1E1E1E",
    "&:hover": {
      background: "#134CB2",
      color: "#ffffff",
    },
  }),
};

const Checkout = () => {
  const { cart, clearCart, totalAmount } = useCartStore();
  const { currentUser, setCurrentUser, getToken, fetchCurrentUser, loading } =
    useAuthStore();
  const { createOrder } = useOrderStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCurrentUser();
    setIsMounted(true);
  }, []);

  if (loading || !isMounted) {
    return (
      <div>
        <section className="checkout-wrap" style={{ minHeight: "100vh" }}>
          <div className="_container">
            <div></div>
          </div>
        </section>
      </div>
    );
  }

  const initialValues = {
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    addressLine1: currentUser?.addressLine1 || "",
    addressLine2: currentUser?.addressLine2 || "",
    province: "",
    city: currentUser?.city || "",
    zip: currentUser?.zip || "",
    country: getCountryOptionByCode(currentUser?.country) || null,
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    specialNotes: "",
    terms: false,
    refundPolicy: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    addressLine1: Yup.string().required("This field is required."),
    city: Yup.string().required("This field is required."),
    zip: Yup.string().required("This field is required."),
    country: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    terms: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions."
    ),
    refundPolicy: Yup.bool().oneOf(
      [true],
      "You must accept the refund policy."
    ),
  });

  const generateRandomPassword = (length = 12) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      let userId = currentUser?.id;
      if (!userId) {
        const registerData = {
          email: values.email,
          password: generateRandomPassword(),
          firstName: values.firstName,
          lastName: values.lastName,
          username: values.email,
          phone: values.phone,
        };

        const registerResponse = await fetch("/api/auth/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });

        if (registerResponse.ok) {
          const registerResult = await registerResponse.json();
          userId = registerResult.user.id;
          localStorage.setItem("jwt", registerResult.jwt);
          fetchCurrentUser();
          await fetch("/api/emails/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
          });
        } else {
          throw new Error("User registration failed.");
        }
      } else {
        const updateData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          addressLine1: values.addressLine1,
          addressLine2: values.addressLine2,
          city: values.city,
          zip: values.zip,
          country: values.country,
          userId,
        };

        const token = getToken();
        const updateResponse = await fetch("/api/auth/user-update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updateData),
        });

        if (!updateResponse.ok) {
          throw new Error("Failed to update user data.");
        }

        const updatedUser = await updateResponse.json();
        setCurrentUser(updatedUser.user);
        localStorage.setItem("user", JSON.stringify(updatedUser.user));
      }

      const productIds = cart.map((product) => product.documentId);
      //const products = cart.map((product) => ({ id: product.id }));

      const orderData = {
        data: {
          email: values.email,
          users_permissions_user: userId,
          products: productIds,
          amount: totalAmount,
          order_status: "completed",
        },
      };

      await createOrder(orderData);

      const emailOrderData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        zip: values.zip,
        country: values.country,
        cart, // Pass the cart items to the email endpoint
        totalAmount, // Include total amount in the email
      };

      await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailOrderData),
      });
      setIsLoading(false);
      router.push("/thankyou");
      clearCart();
    } catch (error) {
      console.error("Order creation failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {isMounted && (
        <>
          {cart.length > 0 ? (
            <div>
              <section className="checkout-wrap">
                <div className="_container">
                  <div className="checkout-wrap__body">
                    <h1>Checkout</h1>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({
                        isSubmitting,
                        setFieldValue,
                        touched,
                        errors,
                        values,
                        status,
                      }) => (
                        <Form>
                          <div className="col-01">
                            <h3>Billing Address</h3>
                            <div className="billing-data">
                              <div className="full">
                                <Field name="country">
                                  {({ field }) => (
                                    <Select
                                      {...field}
                                      placeholder="Country/Region"
                                      options={countryList().getData()}
                                      styles={customStyles}
                                      className={`form-field ${
                                        touched.country && errors.country
                                          ? "invalid"
                                          : ""
                                      }`}
                                      value={values.country?.value}
                                      onChange={(option) =>
                                        setFieldValue("country", option.value)
                                      }
                                    />
                                  )}
                                </Field>
                                <ErrorMessage
                                  name="country"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div>
                                <label>
                                  <Field
                                    placeholder="First Name"
                                    type="text"
                                    name="firstName"
                                    className={
                                      touched.firstName && errors.firstName
                                        ? "invalid"
                                        : ""
                                    }
                                  />
                                </label>
                                <ErrorMessage
                                  className="error"
                                  name="firstName"
                                  component="div"
                                />
                              </div>
                              <div>
                                <label>
                                  <Field
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastName"
                                    className={
                                      touched.lastName && errors.lastName
                                        ? "invalid"
                                        : ""
                                    }
                                  />
                                </label>
                                <ErrorMessage
                                  className="error"
                                  name="lastName"
                                  component="div"
                                />
                              </div>

                              <div className="full">
                                <PhoneInput
                                  country={"us"}
                                  value={values.phone}
                                  excludeCountries={excludedCountries}
                                  placeholder="Phone Number"
                                  onChange={(phone) =>
                                    setFieldValue("phone", phone)
                                  }
                                  className={
                                    touched.phone && errors.phone
                                      ? "invalid"
                                      : ""
                                  }
                                />
                                <ErrorMessage
                                  name="phone"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="full">
                                <label>
                                  <Field
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    className={
                                      touched.email && errors.email
                                        ? "invalid"
                                        : ""
                                    }
                                  />
                                </label>
                                <ErrorMessage
                                  className="error"
                                  name="email"
                                  component="div"
                                />
                              </div>
                              <div className="full">
                                <label>
                                  <Field
                                    placeholder="Address Line 1"
                                    type="text"
                                    name="addressLine1"
                                    className={
                                      touched.addressLine1 &&
                                      errors.addressLine1
                                        ? "invalid"
                                        : ""
                                    }
                                  />
                                </label>
                                <ErrorMessage
                                  className="error"
                                  name="addressLine1"
                                  component="div"
                                />
                              </div>
                              <div className="full">
                                <label>
                                  <Field
                                    placeholder="Address Line 2"
                                    type="text"
                                    name="addressLine2"
                                  />
                                </label>
                              </div>
                              <div className="full">
                                <label>
                                  <Field
                                    placeholder="Province / Region"
                                    type="text"
                                    name="province"
                                  />
                                </label>
                              </div>
                              <div>
                                <label>
                                  <Field
                                    placeholder="City"
                                    type="text"
                                    name="city"
                                    className={
                                      touched.city && errors.city
                                        ? "invalid"
                                        : ""
                                    }
                                  />
                                </label>
                                <ErrorMessage
                                  className="error"
                                  name="city"
                                  component="div"
                                />
                              </div>
                              <div>
                                <label>
                                  <Field
                                    placeholder="ZIP Code"
                                    type="text"
                                    name="zip"
                                    className={
                                      touched.zip && errors.zip ? "invalid" : ""
                                    }
                                  />
                                </label>
                                <ErrorMessage
                                  className="error"
                                  name="zip"
                                  component="div"
                                />
                              </div>
                              <div className="full">
                                <div className="payment-method">
                                  Payment Method: Bank Transfer*
                                </div>
                                <div className="payment-notes">
                                  * You will soon receive an email with payment
                                  instructions, including our bank details and a
                                  summary of your order details.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-02">
                            <div>
                              <h3>Additional Information</h3>
                              <div className="full">
                                <Field
                                  as="textarea"
                                  placeholder="Include special instructions for your order"
                                  name="specialNotes"
                                />
                              </div>
                            </div>
                            <div>
                              <h3>Order Summary</h3>
                              <div className="cart">
                                <div className="cart-head">
                                  <div>Service Name</div>
                                  <div>Subtotal</div>
                                </div>
                                <div className="cart-content">
                                  {cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                      <div>
                                        {item.name} <b>x {item.quantity}</b>
                                      </div>
                                      <div>
                                        €{item.quantity * item.attributes.price}
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                <div className="total">
                                  Total: €{totalAmount}
                                </div>
                              </div>

                              <div className="place-order">
                                <div className="checkbox">
                                  <Field
                                    type="checkbox"
                                    name="terms"
                                    className={
                                      touched.terms && errors.terms
                                        ? "invalid"
                                        : ""
                                    }
                                    id="terms"
                                  />
                                  <label htmlFor="terms">
                                    <CheckboxIconBlack />
                                    <span>
                                      I have read and agree to the website's{" "}
                                      <Link href="/terms-and-conditions">
                                        Terms and Conditions.
                                      </Link>
                                    </span>
                                  </label>
                                  <ErrorMessage
                                    name="terms"
                                    component="div"
                                    className="error"
                                  />
                                </div>

                                <div className="checkbox">
                                  <Field
                                    type="checkbox"
                                    name="refundPolicy"
                                    className={
                                      touched.refundPolicy &&
                                      errors.refundPolicy
                                        ? "invalid"
                                        : ""
                                    }
                                    id="refundPolicy"
                                  />
                                  <label htmlFor="refundPolicy">
                                    <CheckboxIconBlack />
                                    <span>
                                      I have read and agree to the{" "}
                                      <Link href="/refund-policy">
                                        Refund Policy
                                      </Link>
                                    </span>
                                  </label>
                                  <ErrorMessage
                                    name="refundPolicy"
                                    component="div"
                                    className="error"
                                  />
                                </div>

                                <button
                                  className="main-button"
                                  type="submit"
                                  disabled={isSubmitting}
                                >
                                  <span>Submit</span>
                                </button>

                                {isLoading && (
                                  <div
                                    className="loading"
                                    style={{ margin: "10px auto 0 auto" }}
                                  >
                                    <img src="/images/loading.svg" />
                                  </div>
                                )}

                                <div className="privacy">
                                  We will utilise your personal information to
                                  process your order, improve your browsing
                                  experience on our website, and perform other
                                  purposes detailed in our{" "}
                                  <Link href="/privacy-policy">
                                    Privacy Policy
                                  </Link>
                                  .
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*status?.success && (
                            <p className="success-message">
                              Your order has been successfully submitted! Please
                              check your email for a summary of your order and
                              payment instructions.
                            </p>
                          )*/}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <section className="cart-wrap empty">
                <div className="_container">
                  <h1>Your cart is empty.</h1>
                  <p>
                    Discover our wide array of business and marketing consulting
                    services!
                  </p>
                  <Link href="/">
                    <span>Go home</span>
                  </Link>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Checkout;
