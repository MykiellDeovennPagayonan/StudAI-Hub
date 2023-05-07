/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Quiz.css'
import createMultipleChoiceQuiz from '../../functions/createMultipleChoiceQuiz'
import assembleMultipleChoiceQuiz from '../../functions/assembleMultipleChoiceQuiz'
import MultipleChoice from './Quiz/MultipleChoiceQuiz'
import createConceptualQuiz from '../../functions/createConceptQuiz'
import assembleConceptQuiz from '../../functions/assembleConceptQuiz'
import ConceptualQuiz from './Quiz/CenceptualQuiz'
import createNewBatchMultipleChoiceQuiz from '../../functions/createNewBatchMultipleChoiceQuiz'
import createNewBatchConceptualQuiz from '../../functions/createNewBatchConceptQuiz'

export default function Quiz(props) {
  const [messageMultipleChoiceQuiz, setMessageMultipleChoiceQuiz] = useState("Create Multiple Choice Quiz")
  const [messageConceptQuiz, setMessageConceptQuiz] = useState("Create Conceptual Quiz")

  useEffect(() => {
    if (props.multipleChoiceItems.length !== 0) {
      setMessageMultipleChoiceQuiz("View Multiple Choice Quiz")
    }
  }, [props.multipleChoiceItems])

  useEffect(() => {
    if (props.conceptItems.length !== 0) {
      setMessageConceptQuiz("View Conceptual Quiz")
    }
  }, [props.conceptItems])

  async function handleCreateMultipleChoiceQuiz() {
    let multipleChoiceQuizCount = 0
    setMessageMultipleChoiceQuiz(`Generating Multiple Choice Quiz (${multipleChoiceQuizCount}/${props.splitText.length * 10})`)
    let multipleChoiceItemsInitial = []
    for (let i = 0; i < props.splitText.length; i++) {
      let quizContent = await createMultipleChoiceQuiz(props.splitText[i])
      console.log(quizContent)
      let newMultipleChoiceItems = assembleMultipleChoiceQuiz(quizContent)
      multipleChoiceItemsInitial.push(...newMultipleChoiceItems)
      multipleChoiceQuizCount += 10
      setMessageMultipleChoiceQuiz(`Generating Multiple Choice Quiz (${multipleChoiceQuizCount}/${props.splitText.length * 10})`)
    }
    props.setMultipleChoiceItems(multipleChoiceItemsInitial)
    props.setViewMultipleChoice(true)
  }

  async function handleCreateConceptQuiz() {
    let conceptualQuizCount = 0
    setMessageConceptQuiz(`Generating Conceptual Quiz (${conceptualQuizCount}/${props.splitText.length * 5})`)
    let conceptItemsInitial = []
    for (let i = 0; i < props.splitText.length; i++) {
      let quizContent = await createConceptualQuiz(props.splitText[i])
      console.log(quizContent)
      let newConceptItems = assembleConceptQuiz(quizContent)
      conceptItemsInitial.push(...newConceptItems)
      conceptualQuizCount += 5
      setMessageConceptQuiz(`Generating Conceptual Quiz (${conceptualQuizCount}/${props.splitText.length * 5})`)
    }
    console.log(conceptItemsInitial)
    props.setConceptItems(conceptItemsInitial)
    props.setViewMultipleChoice(false)
    setMessageConceptQuiz("View Conceptual Quiz")
  }

  async function newBatchMultipleChoice() {
    let doNotInclude = ""
    for (let i = 0; i < props.multipleChoiceItems.length; i++) {
      doNotInclude += props.multipleChoiceItems[i].getQuestion + "\n"
    }
    let multipleChoiceItemsInitial = []
    for (let i = 0; i < props.splitText.length; i++) {
      let quizContent = await createNewBatchMultipleChoiceQuiz(props.splitText[i], doNotInclude)
      console.log(quizContent)
      let newMultipleChoiceItems = assembleMultipleChoiceQuiz(quizContent)
      multipleChoiceItemsInitial.push(...newMultipleChoiceItems)
    }
    props.setMultipleChoiceItems(multipleChoiceItemsInitial)
  } 

  async function newBatchConcept() {
    let doNotInclude = ""
    for (let i = 0; i < props.conceptItems.length; i++) {
      doNotInclude += props.conceptItems[i].getQuestion + "\n"
    }
    let conceptItemsInitial = []
    for (let i = 0; i < props.splitText.length; i++) {
      let quizContent = await createNewBatchConceptualQuiz(props.splitText[i], doNotInclude)
      console.log(quizContent)
      let newconceptItems = assembleConceptQuiz(quizContent)
      conceptItemsInitial.push(...newconceptItems)
    }
    props.setConceptItems(conceptItemsInitial)
  } 

  return (
    <>
      {props.multipleChoiceItems.length === 0 && props.conceptItems.length === 0 ?
        <div className='create-quiz-holder'>
          <button className='create-quiz' onClick={handleCreateMultipleChoiceQuiz}>
            <h3>{messageMultipleChoiceQuiz}</h3>
          </button>
          <button className='create-quiz' onClick={handleCreateConceptQuiz}>
            <h3>{messageConceptQuiz}</h3>
          </button>
        </div>
        :
        <>
          {props.viewMultipleChoice ? 
            <MultipleChoice
              setViewMultipleChoice={props.setViewMultipleChoice}
              multipleChoiceItems={props.multipleChoiceItems} 
              setMultipleChoiceItems={props.setMultipleChoiceItems}
              handleCreateConceptQuiz={handleCreateConceptQuiz}
              messageConceptQuiz={messageConceptQuiz}
              conceptItems={props.conceptItems}
              newBatchMultipleChoice={newBatchMultipleChoice}/>
            :
            <ConceptualQuiz
              splitText={props.splitText}
              setViewMultipleChoice={props.setViewMultipleChoice}
              conceptItems={props.conceptItems}
              setConceptItems={props.setConceptItems}
              handleCreateMultipleChoiceQuiz={handleCreateMultipleChoiceQuiz}
              messageMultipleChoiceQuiz={messageMultipleChoiceQuiz}
              multipleChoiceItems={props.multipleChoiceItems}
              newBatchConcept={newBatchConcept}/>
          }
        </>
      }
    </>
  )
}