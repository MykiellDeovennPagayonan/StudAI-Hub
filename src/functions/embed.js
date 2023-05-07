import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function embed(splitText) {
  let embeddedChunks = []

  for (let i = 0; i < splitText.length; i++) {
    const response = await openai.createEmbedding({
      model: "text-embedding-ada-002",
      input: splitText[i],
    });
    let embedding = response.data.data[0].embedding;
    embeddedChunks.push({index: i, embedding: embedding})
  }
  return embeddedChunks;
}