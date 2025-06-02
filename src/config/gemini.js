import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY);

async function runChat(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: input,
  });
  // console.log(response.text);
  return response.text;
}

export default runChat;
