// src/Mycomponents/FAQs.js
import React, { useState } from 'react';
const FAQs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
      if (selected === i) {
          return setSelected(null);
      }
      setSelected(i);
  };
  const data = [
    {
        question: "What is angeldata Live Work?",
        answer: "angeldata Live Work is a freelancing platform that allows freelancers to work on micro-tasks like form filling and get paid for their work."
    },
    {
        question: "How much can I earn?",
        answer: "You can earn Rs.25 per form. The total number of forms to be processed is 700, and you have a week to complete them."
    },
    {
        question: "How do I get started?",
        answer: "Simply sign up for an account, complete your profile, and start browsing through available tasks. Select tasks that match your skills and start working."
    },
    {
        question: "How do I get paid?",
        answer: "Once you complete a task and it is approved, your earnings will be added to your account balance. You can withdraw your earnings to your bank account or through other payment methods available on our platform."
    },
    {
        question: "Is there any support available if I have questions or issues?",
        answer: "Yes, support is available via email and chat."
    }
];
  return (
    <div className="faq-container">
    <h2>Frequently Asked Questions</h2>
    {data.map((item, i) => (
        <div className="faq-item" key={i}>
            <div className="faq-question" onClick={() => toggle(i)}>
                <p>{item.question}</p>
                <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'faq-answer show' : 'faq-answer'}>
                <p>{item.answer}</p>
            </div>
        </div>
    ))}
</div>
  );
};

export default FAQs;
