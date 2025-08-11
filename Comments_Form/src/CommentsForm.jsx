// import { useState } from "react";
import { useFormik } from "formik";

export default function CommentsForm() {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: "",
  // });

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username cannot be empty!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let [isValid, setIsValid] = useState(true);

  // let formik.handleChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {

  // if (!formData.username) {
  //   setIsValid(false);
  //   event.preventDefault();
  //   return;
  // }

  //   event.preventDefault();
  //   addNewComment(formData);

  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: "",
  //   });
  // };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username: </label>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          id="username"
        />

        {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}

        <br />
        <br />
        <label htmlFor="remarks">remarks: </label>
        <textarea
          placeholder="add few remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          name="remarks"
          id="remarks"
        >
          Remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">rating: </label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
          id="rating"
        />
        <br />
        <br />
        <button type="submit">Add a comment!</button>
      </form>
    </div>
  );
}
