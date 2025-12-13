import React, { useState } from "react";
import { Formik } from "formik";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;
    if (!username) {
      alert("cannot be empty");
    }
    if (!email) {
      alert("cannot be empty");
    }
    if (!password) {
      alert("cannot be empty");
    }
    console.log(username);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
