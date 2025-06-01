import { createContext, useState,useEffect } from "react";
import runChat from "../config/gemini";

export const AppContext = createContext();



const ContextProvider = ({ children }) => {

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [showResponse, setShowResponse] = useState(false);
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState("");


  const onSent = async (input) => {
  setLoading(true);
  setShowResponse(true);
  setResponse(await runChat(input));
  setLoading(false);

  
  if (input.trim() !== "") {
    setPrevPrompts((prev) => {
      const updated = [...prev, input];
      localStorage.setItem("SavedrecentPrompt", JSON.stringify(updated));
      return updated;
    });
  }

  setRecentPrompt(input);
  setInput("");
};


  
    const contextValue = {
        input,
        setInput,
        response,
        setResponse,
        loading,
        setLoading,
        showResponse,
        setShowResponse,
        prevPrompts,
        recentPrompt,
        setRecentPrompt,
        setPrevPrompts,
        onSent,
    }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;