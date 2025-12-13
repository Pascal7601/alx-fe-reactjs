import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("invalid email address").required("required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  username: "",
  password: "",
};
const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="">Email</label>
        <Field name="email" />
        <ErrorMessage name="email" />

        <label htmlFor="">Username</label>
        <Field name="username" />
        <ErrorMessage name="username" />

        <label htmlFor="">Password</label>
        <Field name="password" />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
