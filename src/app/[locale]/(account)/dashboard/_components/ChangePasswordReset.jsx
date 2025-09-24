'use client';
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useTranslations } from 'next-intl';

const ChangePasswordReset = ({ token }) => {
  const [changePasswordError, setChangePasswordError] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);
  const router = useRouter();
  const [userToken, setUserToken] = useState(null);

  const t = useTranslations('setPassword.form');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserToken(token);
    }
  }, [token]);

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required(
      t('errors.newPassword', { fallback: 'New password is required' }),
    ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('newPassword'), null],
        t('errors.mustMatch', { fallback: 'Passwords must match' }),
      )
      .required(
        t('errors.confirmPassword', {
          fallback: 'Confirm password is required',
        }),
      ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!userToken) {
      setChangePasswordError(
        t('errors.expiredToken', { fallback: 'Invalid or expired token.' }),
      );
      setSubmitting(false);
      return;
    }

    const { newPassword, confirmPassword } = values;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}auth/reset-password`,
        {
          code: userToken, // token received in the reset link
          password: newPassword,
          passwordConfirmation: confirmPassword,
        },
      );

      if (response.status === 200) {
        setPasswordChanged(true);
        setChangePasswordError('');
        setTimeout(() => {
          setPasswordChanged(false);
          router.push('/log-in');
        }, 3000);
      } else {
        setChangePasswordError(
          t('errors.failed', { fallback: 'Failed to change password.' }),
        );
      }
    } catch (error) {
      console.error('Failed to change password', error);
      setChangePasswordError(
        error.response?.data?.message ||
          t('errors.tryAgain', {
            fallback: 'An error occurred. Please try again.',
          }),
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="change-password log-in">
      <div className="_container">
        <div className="log-in__body">
          <h1>Change Password</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form>
                <div>
                  <label>
                    <Field
                      placeholder={t('newPassword', {
                        fallback: 'New password',
                      })}
                      type="password"
                      name="newPassword"
                      className={
                        touched.newPassword && errors.newPassword
                          ? 'invalid'
                          : ''
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="newPassword"
                    component="div"
                  />
                </div>
                <div>
                  <label>
                    <Field
                      placeholder={t('confirmPassword', {
                        fallback: 'Confirm password',
                      })}
                      type="password"
                      name="confirmPassword"
                      className={
                        touched.confirmPassword && errors.confirmPassword
                          ? 'invalid'
                          : ''
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="confirmPassword"
                    component="div"
                  />
                </div>
                <button
                  type="submit"
                  className="main-button"
                  disabled={isSubmitting}
                >
                  <span>
                    {t('setNewPassword', { fallback: 'Set new password' })}
                  </span>
                </button>
                {passwordChanged && (
                  <div className="success">
                    {t('passwordChanged', {
                      fallback: 'Password changed successfully!',
                    })}
                  </div>
                )}
                {changePasswordError && (
                  <div className="error">{changePasswordError}</div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ChangePasswordReset;
