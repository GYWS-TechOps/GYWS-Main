import { DashCircleFill, PlusCircleFill } from 'react-bootstrap-icons';
import './Accordion.css';
import { useState } from 'react';
import HCard from '../../HeaderCard/HCard';

// FAQ Accordion Component
const FAQAccordion = ({ question, answer, index, expandedIndex, setExpandedIndex }) => {
  const isOpen = index === expandedIndex;

  const handleClick = () => {
    setExpandedIndex(isOpen ? -1 : index);
  };

  return (
    <div className="accordion-item" >
      <div className="accordion-header" onClick={handleClick} >
        <div className='accordion-header-question'>{question}</div>
        <div className={`accordion-header-icon`}> {isOpen ? <DashCircleFill /> : <PlusCircleFill />} </div>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

// FAQ Accordion Container Component
const FAQAccordionContainer = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <FAQAccordion
          key={index}
          index={index}
          question={faq.question}
          answer={faq.answer}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}
    </div>
  );
};

// Example Usage
const FAQs = [
  {
    question: 'How can I contact GYWS to donate or for related information?',
    answer: 'You can reach out to us by email: gywsociety@gmail.com or call us at: 03222296537.',
  },
  {
    question: 'Why is the society named \'Gopali Youth Welfare Society\'?',
    answer: 'The NGO took shape to uplift the youth from the village of Gopali, located close to IIT Kharagpur campus. Our Founder- Mr. Mrinal Kanti Bhanja, a localite sowed the seeds of GYWS for the welfare of the people of Gopali along with some socially motivated students from IIT-KGP, back in 2002.',
  },
  {
    question: 'Is the website safe to make online payments?',
    answer: 'Yes, the website is safe for all kinds of transaction. Also, any information exchange is safe and secure and under no circumstances shall be disclosed.',
  },
  {
    question: 'Is it possible for a consistent supporter to meet the beneficiary personally?',
    answer: "While you can visit the school where the children you support are studying we do not encourage donors to directly meet the beneficiaries as we do not want to give special treatment to any child."
  },
  {
    question: 'What are the different initiatives run by GYWS? How can I know more about them?',
    answer: "Education, Prayas, LiGHT, Aarohan and Skill Development are our primary initiatives. Over the past year, we have also had a Covid initiative- under which we distributed foodkits as well as raised funds to provide the villagers with personal protective equipments.You can find detailed information on these on our website under Initiatives tab. You can also mail us for any further details you might want to know."
  },
  {
    question: 'Are you a registered body?',
    answer: "Yes, GYWS is registered under Societies Act. It is also registered for exemption under section 80 G, 12 A and for foreign contributions- under FCRA."
  },
  {
    question: 'Can the donations be made in kind?',
    answer: "Usually in-kind donation is accepted only when there is a need in any of the projects at a given point in time."
  },
  {
    question: 'How much tax exemption will I get for my monetary contribution to GYWS?',
    answer: "50% rebate."
  },
];

const Accordian = () => {
  return (
    <div className='about-accordion-container'>
      <HCard head={"FAQ's"}></HCard>
      <FAQAccordionContainer faqs={FAQs} />
    </div>
  );
};

export default Accordian;
