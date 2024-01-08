import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons from a library like react-icons
import './css/faq.css';

const FAQSection = () => {
  const faqData = [
    { question: 'What programming languages do you teach?', answer: 'We offer courses in JavaScript, Python, Java, and more.' },
    { question: 'Is there a trial period for the courses?', answer: 'Yes, you can sign up for a free trial to explore a sample of our content.' },
    { question: 'How can I access the course materials?', answer: 'Once enrolled, you can access course materials through our online platform.' },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className='icons'>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;