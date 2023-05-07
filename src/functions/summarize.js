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
    return content.data.choices[0].message.content
  }
  
  return new Promise((resolve) => {
    resolve(generate(splitTextChunk))
  })
}