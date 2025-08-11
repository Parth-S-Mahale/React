import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: "",
  });

  let [isValid, setIsValid] = useState(true);

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    if (!formData.username) {
      setIsValid(false);
      event.preventDefault();
      return;
    }
    addNewComment(formData);

    setFormData({
      username: "",
      remarks: "",
      rating: "",
    });
  };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username: </label>
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
          id="username"
        />
        {!isValid && <p style={{color: "red"}}>username cannot be empty!</p>}
        <br />
        <br />
        <label htmlFor="remarks">remarks: </label>
        <textarea
          placeholder="add few remarks"
          value={formData.remarks}
          onChange={handleInputChange}
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
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
          id="rating"
        />
        <br />
        <br />
        <button>Add a comment!</button>
      </form>
    </div>
  );
}
