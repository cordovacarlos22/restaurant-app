import React, { useState } from "react";
import "./ContactUs.css";
import db from "/Users/carloscordova/Desktop/restaurant-app/src/assets/Firebase.js";
import { collection, addDoc } from "firebase/firestore/lite";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    if ((name === "") | (email === "") | (message === "")) {
      alert("MAKE SURE TO FILL FORM COMPLETE");
      return;
    } else {
      await addDoc(collection(db, "contactUs"), {
        name: name,
        email: email,
        message: message,
      })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
