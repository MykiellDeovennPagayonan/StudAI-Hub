import { ItemMultipleChoice } from "../classes/quizMultipleChoiceClass"

export default function assembleMultipleChoiceQuiz(quizText) {
  let questionsInitial = []
  let questionItem = new ItemMultipleChoice()

  for (let i = 2; i < quizText.length; i++) {
    if((quizText[i - 1] === "." || quizText[i - 1] === ":") && (quizText[i - 2] === "1" || quizText[i - 2] === "2" || quizText[i - 2] === "3"  || quizText[i - 2] === "4" || quizText[i - 2] === "5" || quizText[i - 2] === "6" || quizText[i - 2] === "7" || quizText[i - 2] === "8" || quizText[i - 2] === "9" || quizText[i - 2] === "0")) {
      let question = ""
      while(quizText[i] !== "\n") {
        i++
        question += quizText[i]
      }
      questionItem.setQuestion(question)
    }

    if((quizText[i - 1] === "." || quizText[i - 1] === ":") && (quizText[i - 2] === "A" || quizText[i - 2] === "B" || quizText[i - 2] === "C"  || quizText[i - 2] === "D")) {
      let choice = ""
      while(i < quizText.length && quizText[i] !== "\n") {
        i++
        choice += quizText[i]
      }
      questionItem.addChoice(choice)
    }

    if(quizText[i - 8] === "A" && quizText[i - 7] === "n" && quizText[i - 6] === "s" && quizText[i - 5] === "w" && quizText[i - 4] === "e" && quizText[i - 3] === "r" && quizText[i - 2] === ":" && quizText[i - 1] === " ") {
      if (quizText[i] === "A") {
        questionItem.setAnswer(quizText[i] + " " + questionItem.getChoices()[0])
      }

      if (quizText[i] === "B") {
        questionItem.setAnswer(quizText[i] + " " + questionItem.getChoices()[1])
      }

      if (quizText[i] === "C") {
        questionItem.setAnswer(quizText[i] + " " + questionItem.getChoices()[2])
      }

      if (quizText[i] === "D") {
        questionItem.setAnswer(quizText[i] + " " + questionItem.getChoices()[3])
      }

      questionsInitial.push(questionItem)
      questionItem = new ItemMultipleChoice()
    }
  }

  return questionsInitial
}