import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="app">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, isSelectedId] = useState(null);

  function handleClick(Id) {
    isSelectedId(Id !== selectedId ? Id : null)
  }

  return (
    <div className="flashcards">
      {questions && questions.map((question) => {
        return (
          <div className={`${selectedId === question.id ? "selected" : ""}`} onClick={() => { handleClick(question.id) }} key={question.id}>
            <h3>{selectedId === question.id ? question.answer : question.question}</h3>
          </div>
        );
      })}
    </div>
  );
}


export default App;