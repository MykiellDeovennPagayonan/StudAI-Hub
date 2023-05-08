import { ItemConcept } from "../classes/quizConceptClass"

export default function assembleConceptQuiz(quizText) {
  let questionsInitial = []
  let questionItem = new ItemConcept()

  for (let i = 2; i < quizText.length; i++) {
    if((quizText[i - 1] === "." || quizText[i - 1] === ":") && (quizText[i - 2] === "1" || quizText[i - 2] === "2" || quizText[i - 2] === "3"  || quizText[i - 2] === "4" || quizText[i - 2] === "5" || quizText[i - 2] === "6" || quizText[i - 2] === "7" || quizText[i - 2] === "8" || quizText[i - 2] === "9" || quizText[i - 2] === "0")) {
      let question = ""
      while (i < quizText.length && quizText[i] !== "\n") {
        i++
        question += String(quizText[i])
      }
      questionItem.setQuestion(question)
    }

    if(quizText[i - 8] === "A" && quizText[i - 7] === "n" && quizText[i - 6] === "s" && quizText[i - 5] === "w" && quizText[i - 4] === "e" && quizText[i - 3] === "r" && quizText[i - 2] === ":" && quizText[i - 1] === " ") {
      let answer = ""
      while (quizText[i] !== ".") {
        answer += quizText[i]
        i++
      }

      questionItem.setAnswer(answer += ".")
      questionsInitial.push(questionItem)
      questionItem = new ItemConcept()
    }
  }

  return questionsInitial
}