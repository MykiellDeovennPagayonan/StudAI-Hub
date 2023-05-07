/* eslint-disable react/prop-types */
import FlashcardItem from "./FlashcardItem";

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashcardItem flashcard={flashcard} key={flashcard.getKey()} />;
      })}
    </div>
  );
}
