import React from "react";
import "./book.css";
const Book = () => {
  return (
    <>
      <div className="books pb-5">
        <iframe
          className="book"
          title="Appointlet Scheduler"
          width="100%"
          height="600px"
          src="https://appt.link/meet-with-rashidul-islam"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Book;
