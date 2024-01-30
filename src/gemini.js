import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
const langchainLLM = new ChatGoogleGenerativeAI({apiKey: process.env.REACT_APP_GOOGLE_API_KEY});
export async function generateAiContext(title, description) {
  try {
    // Change this {history} according to the context, you want to generate your content
    const history = "Only give me a clickbait measure and nothing else in a range of 1-100 of the title by checking the title and description, I provide as follows{title:description}" + title + ':' + description;
    const langchainTextResponse = await langchainLLM.invoke([['human', history]]);
    const langchainOutput = langchainTextResponse.content;
    return langchainOutput;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while generating AI context.');
  }
}
