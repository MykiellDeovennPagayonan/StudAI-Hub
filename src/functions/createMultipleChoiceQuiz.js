import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function createMultipleChoiceQuiz(splitTextChunk) {
  async function generate(info) {
    const content = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `make a 10 item multiple choice quiz (with only 4 choices) from whatever information I provide. Each choice must be a full answer, no "both A and B" or "none of the above" kind of choice. Format: 
        <Number>. <question>?
          A. <Choice 1>
          B. <Choice 2>
          C. <Choice 3>
          D. <Choice 4>
        Answer: <Correct Letter>`},
        { role: "user", content: info }
      ]
    })
    return content.data.choices[0].message.content
  }
  
  return new Promise((resolve) => {
    resolve(generate(splitTextChunk))
  })
}