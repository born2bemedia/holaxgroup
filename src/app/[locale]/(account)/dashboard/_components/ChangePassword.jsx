'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuthStore from '@/stores/authStore'; // Zustand store for auth
import axios from 'axios';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const ChangePassword = () => {
  const { getToken } = useAuthStore(); // Zustand function to get token
  const [changePasswordError, setChangePasswordError] = useState('');
  const [passwordChanged, setPasswordChanged] = useState(false);

  const t = useTranslations('dashboard.changePassword');

  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required(
      t('errors.currentPassword', { fallback: 'Current password is required' }),
    ),
    newPassword: Yup.string()
      .min(
        8,
        t('errors.passwordMustBeAtLeast8Characters', {
          fallback: 'Password must be at least 8 characters',
        }),
      )
      .required(
        t('errors.newPassword', { fallback: 'New password is required' }),
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref('newPassword'), null],
        t('errors.confirmPassword', { fallback: 'Passwords must match' }),
      )
      .required(
        t('errors.confirmPassword', {
          fallback: 'Confirm password is required',
        }),
      ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { currentPassword, newPassword, confirmPassword } = values;

    try {
      const token = getToken(); // Use Zustand to get JWT token

      // Sending the change password request using axios
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_API_URL}auth/change-password`,
        {
          currentPassword,
          password: newPassword,
          passwordConfirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the JWT token in the header
          },
        },
      );

      if (response.status === 200) {
        setPasswordChanged(true);
        setChangePasswordError('');
        setTimeout(() => {
          setPasswordChanged(false);
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
          t('error', {
            fallback: 'An error occurred while changing the password.',
          }),
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="change-password">
      <h3>{t('title', { fallback: 'Change Password' })}</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <div className="billing-data">
              <div>
                <label>
                  <Field
                    placeholder={t('currentPassword', {
                      fallback: 'Current password',
                    })}
                    type="password"
                    name="currentPassword"
                    className={
                      touched.currentPassword && errors.currentPassword
                        ? 'invalid'
                        : ''
                    }
                  />
                </label>
                <ErrorMessage
                  className="error"
                  name="currentPassword"
                  component="div"
                />
              </div>
              <div>
                <label>
                  <Field
                    placeholder={t('newPassword', {
                      fallback: 'New password',
                    })}
                    type="password"
                    name="newPassword"
                    className={
                      touched.newPassword && errors.newPassword ? 'invalid' : ''
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
              <div>
                <button
                  type="submit"
                  className="main-button"
                  disabled={isSubmitting}
                >
                  <span>{t('saveChanges', { fallback: 'Save changes' })}</span>
                </button>
              </div>
            </div>

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
    </section>
  );
};

export default ChangePassword;
