export class ItemConcept {
  _question
  _answer
  constructor() {
    this._question = ""
    this._answer = ""
  }

  getQuestion() {
    return this._question
  }

  getAnswer() {
    return this._answer
  }

  setQuestion(question) {
    this._question = question
  }

  setAnswer(answer) {
    this._answer = answer
  }
}