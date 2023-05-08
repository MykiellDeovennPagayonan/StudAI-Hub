import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function createNewBatchConceptualQuiz(splitTextChunk, doNotInclude) {
  async function generate(info, doNotInclude) {
    const content = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `make 5 conceptual questions that needs deep explaining from whatever information I provide. Provide a long "one" sentence answer for each question. Format: 
        <Number>. <question>?
        Answer: <Answer>
        \n
        <Number>. <question>?
        Answer: <Answer>

        They must be completely different from the following questions:
        ${doNotInclude}
        `},
        { role: "user", content: info }
      ]
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(content.data.choices[0].message.content);
      }, 15000);
    });
  }
  
  return generate(splitTextChunk, doNotInclude)
}