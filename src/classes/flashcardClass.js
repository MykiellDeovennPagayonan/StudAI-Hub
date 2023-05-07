export class Flashcard {
  _question
  _answer
  _key
  constructor() {
    this._question = ""
    this._answer = ""
    this._key = undefined
  }

  getQuestion() {
    return this._question
  }

  getAnswer() {
    return this._answer
  }

  getKey() {
    return this._key
  }

  setQuestion(question) {
    this._question = question
  }

  setAnswer(answer) {
    this._answer = answer
  }
  
  setKey(key) {
    this._key = key
  }
}