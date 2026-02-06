
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHealthAdviceStream = async (query: string) => {
  return ai.models.generateContentStream({
    model: 'gemini-3-flash-preview',
    contents: [{ role: 'user', parts: [{ text: query }] }],
    config: {
      systemInstruction: `Anda adalah "EduSense AI", pakar kesehatan masyarakat yang tenang, empati, dan informatif. 
      Tugas utama Anda adalah mengedukasi masyarakat tentang "Super Flu" (Influenza Pandemi/Zoonotik).
      
      Aturan Respon:
      1. Gunakan Bahasa Indonesia yang formal namun hangat.
      2. Berikan fakta berbasis sains (WHO/CDC).
      3. Jangan menimbulkan kepanikan; fokus pada solusi dan pencegahan.
      4. Jika ditanya hal di luar kesehatan/flu, arahkan kembali ke topik edukasi flu dengan sopan.
      5. Gunakan poin-poin (bullet points) jika menjelaskan langkah-langkah agar mudah dibaca.`
    }
  });
};

export const generateTopicImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{
        parts: [{ text: `${prompt}. High quality, cinematic medical illustration, minimalist style, calm teal and slate color palette, clean professional scientific look.` }]
      }],
      config: {
        imageConfig: {
          aspectRatio: "4:3"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation error:", error);
    return null;
  }
};
