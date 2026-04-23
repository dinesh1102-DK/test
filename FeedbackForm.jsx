import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

   
    localStorage.setItem("feedback", JSON.stringify(feedbackData));

    navigate("/Feedback");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <input type="text" placeholder="Name" ref={nameRef} required />
      <br />

      <input type="email" placeholder="Email" ref={emailRef} required />
      <br />

      <textarea placeholder="Message" ref={messageRef} required />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;