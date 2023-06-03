import { useState } from "react";
import styles from "./styles.module.css";

export const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common questions about buying a PC.</p>
      <div className={styles.dropdownContent}>
        <Question
          questionId={1}
          questionText="Question 1"
          isActive={activeQuestion === 1}
          toggleQuestion={toggleQuestion}
        >
          Answer 1
        </Question>

        <Question
          questionId={2}
          questionText="Question 2"
          isActive={activeQuestion === 2}
          toggleQuestion={toggleQuestion}
        >
          Answer 2
        </Question>

        <Question
          questionId={3}
          questionText="Question 3"
          isActive={activeQuestion === 3}
          toggleQuestion={toggleQuestion}
        >
          Answer 3
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  questionId,
  questionText,
  isActive,
  toggleQuestion,
  children,
}) => {
  return (
    <div>
      <button
        className={`${styles.dropdownButton} ${isActive ? styles.active : ""}`}
        onClick={() => toggleQuestion(questionId)}
      >
        {questionText}
      </button>
      {isActive && <div className={styles.answer}>{children}</div>}
    </div>
  );
};
