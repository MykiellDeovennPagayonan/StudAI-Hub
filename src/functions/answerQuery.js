import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function answerQuery(query, embeddedChunks, splitText) {
  let response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: query
  });
  let embedding = response.data.data[0].embedding;
  console.log(embedding)
  
  function cosineSimilarity(a, b) {
    let dot = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }
    const normProduct = Math.sqrt(normA) * Math.sqrt(normB);
    if (normProduct === 0) {
      return 0;
    }
    return dot / normProduct;
  }
  
  const results = [];
  
  for (let i = 0; i < embeddedChunks.length; i++) {
    let docEmbedding = embeddedChunks[i];
    let index = docEmbedding.index;
    console.log(embedding)
    console.log(docEmbedding.embedding)
    let similarity = cosineSimilarity(embedding, docEmbedding.embedding);
    results.push({index: index, similarity: similarity});
  }
  
  results.sort((a, b) => b.similarity - a.similarity);

  let details = ""

  const returnRelevantChunks = 2

  console.log(results)
  let chunkNum
  if (results.length > returnRelevantChunks) {
    chunkNum = returnRelevantChunks
  } else {
    chunkNum = results.length
  }

  for (let i = 0; i < chunkNum; i++) {
    details += splitText[results[i].index]
  }
  
  let answer = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: `Answer the following question with the information provided. Question ${query}`},
      { role: "user", content: `information ${details}` }
    ]
  })
  console.log(answer.data.choices[0].message.content)
  return (answer.data.choices[0].message.content)
}