import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function createNewBatchMultipleChoiceQuiz(splitTextChunk, doNotInclude) {
  async function generate(info) {
    const content = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `make a 10 item multiple choice quiz (with only 4 choices) from whatever information I provide. Provide an answer key after each question. Format: 
        <Number>. <question>?
          A. <Choice 1>
          B. <Choice 2>
          C. <Choice 3>
          D. <Choice 4>
        Answer: <Correct Letter>
        \n
        <Number>. <question>?
          A. <Choice 1>
          B. <Choice 2>
          C. <Choice 3>
          D. <Choice 4>
        Answer: <Correct Letter>
        
        They must be completely different from the following questions:
        ${doNotInclude}
        `},
        { role: "user", content: info }
      ]
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(content.data.choices[0].message.content);
      }, 7000);
    });
  }
  
  return generate(splitTextChunk, doNotInclude)
}