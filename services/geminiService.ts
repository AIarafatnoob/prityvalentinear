import { GoogleGenAI } from "@google/genai";

export const generateLovePoem = async (): Promise<string> => {
  try {
    // The API key must be obtained exclusively from the environment variable process.env.API_KEY.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Write a short, witty, creative, and very romantic poem (max 6 lines) for a girl named Prety.
      Context: The writer is a guy who met her in university 7 years ago. It was love at first sight for him.
      They have been talking on and off since then. Now he wants to ask her to be his Valentine.
      Make it sweet but slightly funny. Do not include a title.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Roses are red, violets are blue, 7 years later, I still choose you.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Even if the AI fails, my heart doesn't. You're the one, Prety.";
  }
};