import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDClxDWFIMVIMyOp2oeOxmVYhkmiGFUuis" });

async function runChat(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: input,
  });
  // console.log(response.text);
  return response.text;
}

export default runChat;