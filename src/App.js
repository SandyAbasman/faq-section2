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
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="question-container">
      {data.map((item, index) => (
        <Question
          text={item.text}
          number={index}
          key={index}
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
        >
          {item.answer}
        </Question>
      ))}
      <Question
        text="New text"
        number={21}
        key={20}
        currOpen={currOpen}
        setCurrOpen={setCurrOpen}
      >
        <p>new answer</p>
      </Question>
    </div>
  );
}

function Question({ text, number, currOpen, setCurrOpen, children }) {
  const isOpen = number === currOpen;

  function handleToggle() {
    setCurrOpen(isOpen ? null : number);
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
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default App;
