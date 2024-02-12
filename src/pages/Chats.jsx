import { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set attributes for the script element
    script.async = true;
    script.src = "https://embed.tawk.to/65c7cc430ff6374032cba06a/1hma7bqmu";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Append the script element to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
