import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Author name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="author-form">
        <div className="form-group">
          <label htmlFor="name">Author Name:</label>
          <Field type="text" id="name" name="name" className="form-control" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Birth Date:</label>
          <Field type="date" id="birthDate" name="birthDate" className="form-control" />
          <ErrorMessage name="birthDate" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="biography">Biography:</label>
          <Field as="textarea" id="biography" name="biography" className="form-control" />
          <ErrorMessage name="biography" component="div" className="error" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
  
  );
};

export default AuthorForm;
