import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  return (
    <center>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Title:</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" className="error" />
        </div>

        <div>
          <label>Author:</label>
          <Field type="text" name="author" />
          <ErrorMessage name="author" component="div" className="error" />
        </div>

        <div>
          <label>ISBN:</label>
          <Field type="text" name="isbn" />
          <ErrorMessage name="isbn" component="div" className="error" />
        </div>

        <div>
          <label>Publication Date:</label>
          <Field type="date" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </center>
  );
};

export default BookForm;
