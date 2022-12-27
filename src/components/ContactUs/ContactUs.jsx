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
      // alert("MAKE SURE TO FILL FORM COMPLETE");
      wait()
      handleClick();
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

  // !removes class of input to fill form complete
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
    return;
  };

  const wait = () => {
    let timeout;
    timeout = setTimeout(handleClick, 2000);
    return;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="gap"></div>
      <div></div> <br></br>
      <br></br>
      <br></br>
      <h1 className="contactus-title">Contact Us 🤳</h1>
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
        className="btn  btn-secondary"
        type="submit"
        style={{ display: isShown ? "block" : "none" }}
      >
        Submit
      </button>
      <button
        className="btn btn-danger"
        type="submit"
        style={{ display: isShown ? "none" : "block" }}
      >
        fill form please
      </button>
    </form>
  );
};

export default Contact;
