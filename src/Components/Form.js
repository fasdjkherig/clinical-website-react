import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      date: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.number) {
        errors.number = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.date) {
        errors.date = "Required";
      }

      return errors;
    },

    onSubmit: (values) => {
      fetch(
        "https://http-project-8dad5-default-rtdb.firebaseio.com/bookingDetails.json",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      toast.success("Successfully booked.");
    },
  });
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <h3>book appointment</h3>
        <input
          type="text"
          name="name"
          placeholder="your name"
          className="box"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="error">{formik.errors.name}</p>
        ) : null}
        <input
          type="number"
          name="number"
          placeholder="your number"
          className="box"
          {...formik.getFieldProps("number")}
        />
        {formik.touched.number && formik.errors.number ? (
          <p className="error">{formik.errors.number}</p>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="your email"
          className="box"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
        <input
          type="date"
          name="date"
          className="box"
          {...formik.getFieldProps("date")}
        />
        {formik.touched.date && formik.errors.date ? (
          <p className="error">{formik.errors.date}</p>
        ) : null}
        <input type="submit" value="book now" className="btn" />
      </form>
    </React.Fragment>
  );
};

export default Form;
