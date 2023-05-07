/* eslint-disable react/prop-types */
import { useState } from 'react'
import FlashcardList from './Flashcards/FlashcardList';
import './Flashcards.css'

export default function Flashcards(props) {
  const [flashcards, setFlashcards] = useState([]);

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />;
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Quedsdadadsadsdsaaaaaaads sdaaaaaaaaaaad aaaaaaaaaaaaaaaaa  sSSSSSSSSSSSSSSSSS  SASsaSsS stion 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },{
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 1,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question 2",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  },
  {
    id: 3,
    question: "What is 2+2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 5,
    question: "4",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 6,
    question: "5",
    answer: "Answer",
    options: ["Answer1", "Answer2", "Answer3", "Answer5"],
  }
];
