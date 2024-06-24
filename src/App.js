import { useState } from "react";
import "./style.css";

const faq = [
  {
    text: "What is your name?",
    answer: "My name is Sandy",
  },

  {
    text: "How old are you?",
    answer: "old enough",
  },

  {
    text: "What are you learning?",
    answer: "web development",
  },

  {
    text: "What is your nationality?",
    answer: " Nigerian",
  },
];

function App() {
  return (
    <div className="app">
      <QuestionContainer data={faq} />;
    </div>
  );
}

function QuestionContainer({ data }) {
  return (
    <div className="question-container">
      {data.map((item, index) => (
        <Question
          text={item.text}
          answer={item.answer}
          number={index}
          key={index}
        />
      ))}
    </div>
  );
}

function Question({ text, answer, number }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div
      className={`each-question ${isOpen && "selected"}`}
      onClick={handleToggle}
    >
      <div className="upper-question">
        <p className="number">{number < 9 ? ` 0${number + 1}` : number + 1}</p>
        <p className="text">{text}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
