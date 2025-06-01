import React, { useEffect, useState } from "react";
import { marked } from "marked";

const TypingResponse = ({ response }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); 
    if (!response) return;

    let i = 0;
    const plainText = response; 

    const interval = setInterval(() => {
      setDisplayed(plainText.slice(0, i + 1));
      i++;
      if (i >= plainText.length) clearInterval(interval);
    }, 10); 

    return () => clearInterval(interval);
  }, [response]);

  

  
  return (
      <pre><p dangerouslySetInnerHTML={{__html:marked.parse(displayed)}}></p></pre>

  );
};

export default TypingResponse;