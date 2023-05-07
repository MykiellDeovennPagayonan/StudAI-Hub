/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import FlashcardList from './Flashcards/FlashcardList';
import assembleFlashcards from '../../functions/assembleFlashcards';
import './Flashcards.css'

export default function Flashcards(props) {
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    if (props.multipleChoiceItems.length !== 0) {
      let flashcardsInitial = assembleFlashcards(props.multipleChoiceItems)
      setFlashcards(flashcardsInitial)
    }
  }, [])

  return (
    <div className="container">
      {props.multipleChoiceItems.length === 0 ?
        <div className='create-quiz-holder'>
          <div className='create-quiz'>
            <h3 className='flashcard-message'> Create a multiple Choice Quiz First </h3>
          </div>
        </div>
        :
        <FlashcardList flashcards={flashcards} />
      }
    </div>
  );
}