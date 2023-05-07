/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function MultipleChoice(props) {
  const [quizPage, setQuizPage] = useState(0)
  const [messageNewbatch, setMessageNewBatch] = useState('Create New Batch')

  useEffect(() => {
    setMessageNewBatch("Create New Batch")
  }, [props.multipleChoiceItems])

  function handleSwitchQuiz() {
    if (props.conceptItems.length === 0) {
      props.handleCreateConceptQuiz()
    } else {
      props.setViewMultipleChoice(false)
    }
  }
  
  return (
    <div className='quiz-section-content'>
      {quizPage === 0 ? 
        <div className='quiz'>
          <div className='quiz-holder'>
          {props.multipleChoiceItems.map((item, index) => {
            return (
              <>
                <p>{index + 1}: {item.getQuestion()}</p>
                <p>A. {item.getChoices()[0]}</p>
                <p>B. {item.getChoices()[1]}</p>
                <p>C. {item.getChoices()[2]}</p>
                <p>D. {item.getChoices()[3]}</p>
                <br></br>
              </>
            )
          })}
          </div>
        </div>
        :
        <div className='quiz'>
          <div className='quiz-holder'>
          {props.multipleChoiceItems.map((item, index) => {
            return (
              <>
                <p>{index + 1}. Answer: {item.getAnswer()}</p>
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
          <button className="switch-quiz-button" onClick={handleSwitchQuiz}> {props.messageConceptQuiz} </button>
        </div>
      </div>
    </div>
  );
}
