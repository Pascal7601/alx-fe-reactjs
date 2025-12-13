import React from "react";
import { useFormik } from "formik";

function formikForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="">Username</label>
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <label htmlFor="">Password</label>
        <input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </form>
    </div>
  );
}

export default formikForm;
