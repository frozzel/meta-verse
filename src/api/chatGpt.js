import client from "./client";

export const chatgpt = async (message) => {
  try {
    const { data } = await client.post("/chatgpt/generate-response", { userMessage: message });
  return data;
  } catch (error) {
    console.log(error);
  }
}
