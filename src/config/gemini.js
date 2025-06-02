import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const { prompt } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ text });
  } catch (error) {
    console.error("Error with Gemini API:", error);
    res.status(500).json({ error: 'API call failed' });
  }
}
