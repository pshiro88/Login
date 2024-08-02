// src/components/Login.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/hello');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Formik
          initialValues={{ username: '', password: '', age: '', gender: '', dob: '' }}
          validationSchema={Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
            age: Yup.number().required('Required').min(1, 'Invalid age').max(120, 'Invalid age'),
            gender: Yup.string().oneOf(['male', 'female', 'other']).required('Required'),
            dob: Yup.date().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values.username, values.password));
            setSubmitting(false);
          }}
        >
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <Field name="username" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <Field name="age" type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
              <Field as="select" name="gender" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <Field name="dob" type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Login
            </button>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
