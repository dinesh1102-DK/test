import React from "react";

function Feedback() {
  const data = JSON.parse(localStorage.getItem("feedback"));

  return (
    <div>
      <h2>Submitted Feedback</h2>

      {data ? (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Message:</strong> {data.message}</p>
        </div>
      ) : (
        <p>No feedback submitted yet.</p>
      )}
    </div>
  );
}

export default Feedback;