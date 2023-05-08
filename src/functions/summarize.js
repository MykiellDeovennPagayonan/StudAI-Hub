import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function summarize(splitTextChunk) {
  async function generate(info) {
    const content = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `summarize the information I will give you in 1 paragraph`},
        { role: "user", content: info }
      ]
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(content.data.choices[0].message.content);
      }, 18000);
    });
  }
  
  return generate(splitTextChunk);
}