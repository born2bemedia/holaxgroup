'use client';
import '@/styles/login.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/stores/authStore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import SignUp from './_components/SignUp';
import { useTranslations } from 'next-intl';

export default function SignIn() {
  const router = useRouter();
  const { fetchCurrentUser, currentUser } = useAuthStore();

  const t = useTranslations('logIn');

  useEffect(() => {
    if (currentUser) {
      router.push('/dashboard');
    }
  }, [currentUser]);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('errors.invalidEmail', { fallback: 'Invalid email address' }))
      .required(t('errors.email', { fallback: 'Email is required' })),
    password: Yup.string().required(
      t('errors.password', { fallback: 'Password is required' }),
    ),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, setErrors },
  ) => {
    try {
      const response = await fetch(`/api/auth/log-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(
          data.message || t('loginFailed', { fallback: 'Login failed' }),
        );
      }

      if (data.user.jwt) {
        localStorage.setItem('jwt', data.user.jwt);
        fetchCurrentUser();
        router.push('/dashboard');
      } else {
        throw new Error('JWT not found');
      }
    } catch (error) {
      console.log(error.message);
      setErrors({
        submit:
          error.message ||
          t('unexpectedError', { fallback: 'An unexpected error occurred' }),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="log-in">
        <div className="_container">
          <div className="log-in__body">
            <h1>{t('title', { fallback: 'Welcome to Holax Group!' })}</h1>
            <h2>
              {t('description.0', {
                fallback: 'Please enter your username and password',
              })}{' '}
              <br />
              {t('description.1', {
                fallback: 'to access your account.',
              })}
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
                      placeholder={t('email', { fallback: 'Email' })}
                      className={touched.email && errors.email ? 'invalid' : ''}
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
                      placeholder={t('password', { fallback: 'Password' })}
                      className={
                        touched.password && errors.password ? 'invalid' : ''
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
                    <span>{t('submit', { fallback: 'Log in' })}</span>
                  </button>

                  {errors.submit && (
                    <div className="error submit-error">{errors.submit}</div>
                  )}

                  <div className="bottom">
                    <div>
                      {t('forgotPassTitle.0', {
                        fallback: 'Forgot your password? Don’t worry!',
                      })}{' '}
                      <br />
                      {t('forgotPassTitle.1', {
                        fallback: 'Click the link below to reset it.',
                      })}{' '}
                      <Link className="reset" href="/reset-password">
                        {t('forgotPassTitle.2', {
                          fallback: 'Forgot your password?',
                        })}
                      </Link>
                    </div>
                    <div>
                      {t('signUp.0', {
                        fallback: 'New to Holax Group?',
                      })}{' '}
                      <Link className="reset" href="/sign-up">
                        {t('signUp.1', {
                          fallback: 'Sign up',
                        })}
                      </Link>{' '}
                      {t('signUp.2.0', {
                        fallback: 'now to join our',
                      })}{' '}
                      <br />
                      {t('signUp.2.1', {
                        fallback:
                          'community and enjoy exclusive benefits and features.',
                      })}
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
