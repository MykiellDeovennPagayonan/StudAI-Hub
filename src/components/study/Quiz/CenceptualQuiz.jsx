/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function ConceptualQuiz(props) {
  const [quizPage, setQuizPage] = useState(0)
  const [messageNewbatch, setMessageNewBatch] = useState('Create New Batch')

  useEffect(() => {
    setMessageNewBatch("Create New Batch")
  }, [props.conceptItems])

  function handleSwitchQuiz() {
    if (props.multipleChoiceItems.length === 0) {
      props.handleCreateMultipleChoiceQuiz()
    } else {
      props.setViewMultipleChoice(true)
    }
  }

  return (
    <div className='quiz-section-content'>
      {quizPage === 0 ? 
        <div className='quiz'>
          <div className='quiz-holder'>
          {props.conceptItems.map((item, index) => {
            return (
              <>
                <p>{index + 1}. {item.getQuestion()}</p>
                <br></br>
              </>
            )
          })}
          </div>
        </div>
        :
        <div className='quiz'>
          <div className='quiz-holder'>
          {props.conceptItems.map((item, index) => {
            return (
              <>
                <p>{index + 1}. {item.getAnswer()}</p>
                <br></br>
              </>
            )
          })}
          </div>
        </div>
      }
      <div className='quiz-buttons'>
        <button className='tabs-button' style={quizPage === 0 ? {backgroundColor: 'white', color: 'black'} : null} onClick={() => setQuizPage(0)}> Questions </button>
        <button className='tabs-button' style={quizPage === 1 ? {backgroundColor: 'white', color: 'black'} : null} onClick={() => setQuizPage(1)}> Answers </button>
        <div className="switch-quiz">
          {props.file !== " " ? <button className="switch-quiz-button" onClick={() => {props.newBatchMultipleChoice(), setMessageNewBatch('Generating New Batch')}}> {messageNewbatch} </button> : null}
          <button className="switch-quiz-button" onClick={handleSwitchQuiz}> {props.messageMultipleChoiceQuiz} </button>
        </div>
      </div>
    </div>
  );
}
