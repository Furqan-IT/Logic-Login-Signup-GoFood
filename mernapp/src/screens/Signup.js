import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const [error, setError] = useState(""); // Add state for error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5500/api/createuser", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        geolocation: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);
    

    if (json.success) {
      // Data submitted successfully
      console.log("Data submitted successfully");
    } else if (json.errors) {
      if (Array.isArray(json.errors)) {
        // Display server-side validation errors
        const errorMessages = json.errors.map((error) => error.msg);
        setError(errorMessages.join(", "));
      } else {
        setError(json.errors); // Handle non-array error response
      }
    } else {
      setError("There was an issue with your submission.");
      console.log("Error: Data submission failed");
    }
   };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to={"./Login.js"} className="m-3 btn btn-danger">
          Already a User
        </Link>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message if it exists */}
      </form>
    </div>
  );
}
