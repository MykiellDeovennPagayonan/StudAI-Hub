export class ItemMultipleChoice {
  _question
  _choices
  _answer
  _check
  constructor() {
    this._question = ""
    this._choices = []
    this._answer = ""
    this._check = undefined
  }

  getQuestion() {
    return this._question
  }

  getChoices() {
    return this._choices
  }

  getAnswer() {
    return this._answer
  }

  getCheck() {
    return this._check
  }

  setQuestion(question) {
    this._question = question
  }

  setChoices(choices) {
    this._choices = choices
  }

  setAnswer(answer) {
    this._answer = answer
  }

  addChoice(choice) {
    this._choices.push(choice)
  }

  right() {
    this._check = true
  }

  wrong() {
    this._check = false
  }

  resetCheck() {
    this._check = undefined
  }
}