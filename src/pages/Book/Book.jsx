import React, { useEffect } from "react";
import "./book.css";
const Book = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.ycb.me";
    script.async = true;
    script.dataset.domain = "aboutrashidul";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="book"></div>
    </div>
  );
};

export default Book;
