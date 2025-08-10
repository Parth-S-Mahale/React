import { useState } from "react";

export default function Forms() {
  // let [fullName, setFullName] = useState("");
  // let [userName, setUsername] = useState("");

  // let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  // }

  // let handleUsername = (event) => {
  //     setUsername(event.target.value);
  // }

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    /* 
    let fieldName = event.target.name;
    let newName = event.target.value; 
    */

    /* 
    console.log(fieldName); // fullName, username
    */

    /* 
    console.log(newName); // value of fullName, username
    */

    
    // To print updated/real-time form data on frontend
    setFormData((currData) => {

        /* 
        currData[fieldName] = newName;
        return { ...currData}; 
        */

        /* 
        // Shortcut in one line!
        return { ...currData, [fieldName]: newName};
        */

        // Best Shortcut in one line!
        return {...currData, [event.target.name]: event.target.value}
      
    });
  };

  // handle default submit behaviour
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    
    //Reset Form Data/value 
    setFormData({
        fullName: "",
        username: "",
        password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full name: </label>
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      <br />
      <br />

      <label htmlFor="username">username: </label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br />
      <br />
      
      <label htmlFor="password">password: </label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
