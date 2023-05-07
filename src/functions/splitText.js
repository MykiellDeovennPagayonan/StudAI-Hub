export default function handleSplitText(textToSplit) {
  let splitText = []
  const charcters = 5000
  const overlap = 300

  let currentChar = 0

  let splitTextAdd = ""
  for (let i = 0; i < textToSplit.length; i++) {
    splitTextAdd += textToSplit[i]
    currentChar++

    if (currentChar === charcters) {
      splitText.push(splitTextAdd)
      i -= overlap
      currentChar = 0
      splitTextAdd = ""
    }
    if (i === textToSplit.length - 1) {
      splitText.push(splitTextAdd)
    }
  }

  console.log(splitText)
  return splitText
}