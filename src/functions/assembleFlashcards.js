import { Flashcard } from "../classes/flashcardClass"

export default function assembleFlashcards(multipleChoiceQuiz) {
  let flashcards = []
  for (let i = 0; i < multipleChoiceQuiz.length; i++) {
    let flashcardItem = new Flashcard()
    let question = multipleChoiceQuiz[i].getQuestion()
    let answer = multipleChoiceQuiz[i].getAnswer().substring(2)

    if (answer.toLowerCase().includes("all of the above")) {
      let initialAnswer = ""
      for (let j = 0; j < multipleChoiceQuiz[i].getChoices().length - 1; j++) {
        initialAnswer += multipleChoiceQuiz[i].getChoices()[j]
        if (j < multipleChoiceQuiz[i].getChoices().length - 2) {
          initialAnswer += ", "
        }
      }
      console.log(initialAnswer)
      answer = initialAnswer
    }

    flashcardItem.setQuestion(question)
    flashcardItem.setAnswer(answer)
    flashcardItem.setKey(i)
    flashcards.push(flashcardItem)
  }
  console.log(flashcards)
  return flashcards
}