'use client';
import React, { useState } from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from 'formik';
import * as Yup from 'yup';
import usePopupStore from '@/stores/popupStore';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ChevronDown from '@/icons/other/ChevronDown';
import { excludedCountries } from '@/utils/countries';
import { useTranslations } from 'next-intl';

function JobPopup() {
  const { jobsPopupDisplay, setJobsPopupDisplay, jobValue } = usePopupStore();

  const t = useTranslations('careers.jobPopup');

  const validationSchema = Yup.object({
    fullName: Yup.string().required(
      t('errors.required', { fallback: 'This field is required' }),
    ),
    email: Yup.string()
      .email(
        t('errors.invalidEmail', {
          fallback: 'Please, enter valid email',
        }),
      )
      .required(t('errors.required', { fallback: 'This field is required' })),
    phone: Yup.string().required(
      t('errors.required', { fallback: 'This field is required' }),
    ),
    position: Yup.string().required(
      t('errors.required', { fallback: 'This field is required' }),
    ),
  });

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    position: jobValue,
    message: '',
    resume: null,
    portfolio: null,
  };

  const closePopup = resetForm => {
    setJobsPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus },
  ) => {
    let resumeData = null;
    if (values.resume) {
      resumeData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64EncodedData = reader.result;
          resolve({
            base64: base64EncodedData.split(';base64,').pop(), // Get only the base64 part
            filename: values.resume.name, // Get the filename
            mimetype: values.resume.type, // Get the MIME type
          });
        };
        reader.onerror = error => reject(error);
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
            base64: base64EncodedData.split(';base64,').pop(), // Get only the base64 part
            filename: values.portfolio.name, // Get the filename
            mimetype: values.portfolio.type, // Get the MIME type
          });
        };
        reader.onerror = error => reject(error);
        reader.readAsDataURL(values.portfolio);
      });
    }

    const payload = {
      ...values,
      resume: resumeData,
      portfolio: portfolioData,
    };

    try {
      const response = await fetch('/api/emails/job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    <div className={`order-popup-wrap ${jobsPopupDisplay ? 'opened' : ''}`}>
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
                        <h2>
                          {t('title', {
                            fallback: 'Ready to join Holax Group?',
                          })}
                        </h2>
                        <p>
                          {t('description', {
                            fallback:
                              'Fill out the form below to submit your application!',
                          })}
                        </p>
                        <span className="service">
                          <b>{t('job', { fallback: 'Job:' })}</b> {jobValue}
                        </span>

                        <Field type="hidden" name="position" />
                        <div className="full">
                          <Field
                            name="fullName"
                            type="text"
                            placeholder={t('yourFullName', {
                              fallback: 'Your Full Name',
                            })}
                            className={
                              touched.fullName && errors.fullName
                                ? 'invalid'
                                : ''
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
                            country={'us'}
                            excludeCountries={excludedCountries}
                            value=""
                            placeholder={t('contactNumber', {
                              fallback: 'Your Contact Number',
                            })}
                            onChange={phone => setFieldValue('phone', phone)}
                            className={
                              touched.phone && errors.phone ? 'invalid' : ''
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
                            placeholder={t('emailAddress', {
                              fallback: 'Your Email Address',
                            })}
                            className={
                              touched.email && errors.email ? 'invalid' : ''
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
                                document.getElementById('resume').click()
                              }
                            >
                              <span className="fileName">
                                {values.resume
                                  ? values.resume.name
                                  : t('uploadResume', {
                                      fallback: 'Upload Resume (PDF or Word)',
                                    })}
                              </span>
                              <span>
                                Choose file <ChevronDown />
                              </span>
                            </span>
                            <input
                              id="resume"
                              name="resume"
                              type="file"
                              onChange={event => {
                                setFieldValue(
                                  'resume',
                                  event.currentTarget.files[0],
                                );
                              }}
                              style={{ display: 'none' }}
                            />
                            <ErrorMessage name="resume" component="span" />
                          </div>
                        </div>

                        <div className="form-block full">
                          <div className="input-wrap file-wrap">
                            <span
                              className="upload-custom"
                              onClick={() =>
                                document.getElementById('portfolio').click()
                              }
                            >
                              <span className="fileName">
                                {values.portfolio
                                  ? values.portfolio.name
                                  : t('uploadPortfolio', {
                                      fallback:
                                        'Upload Portfolio (if applicable)',
                                    })}
                              </span>
                              <span>
                                {t('chooseFile', {
                                  fallback: 'Choose file',
                                })}{' '}
                                <ChevronDown />
                              </span>
                            </span>
                            <input
                              id="portfolio"
                              name="portfolio"
                              type="file"
                              onChange={event => {
                                setFieldValue(
                                  'portfolio',
                                  event.currentTarget.files[0],
                                );
                              }}
                              style={{ display: 'none' }}
                            />
                            <ErrorMessage name="portfolio" component="span" />
                          </div>
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            as="textarea"
                            placeholder={t('yourMessage', {
                              fallback: 'Your Message',
                            })}
                            className={
                              touched.message && errors.message ? 'invalid' : ''
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
                          <span>{t('send', { fallback: 'Send' })}</span>
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>
                          {t('success.title', {
                            fallback:
                              'Your request has been sent successfully.',
                          })}
                        </h3>
                        <p>
                          {t('success.description', {
                            fallback: 'We will contact you soon!',
                          })}
                        </p>
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
