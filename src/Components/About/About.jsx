import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";




const About = () => {
  const [openFAQs, setOpenFAQs] = useState(new Array(8).fill(false));

  const toggleFAQ = (index) => {
    const newOpenFAQs = [...openFAQs];
    newOpenFAQs[index] = !newOpenFAQs[index];
    setOpenFAQs(newOpenFAQs);
  };

  const faqContent = [
    {
      question: " What are the festival dates for 2024?",
      answer:
        "The Raha Festival will be held on the 30th and 31st March 2024.",
    },
    {
      question: "What are the opening hours for the event?",
      answer:
        "The event starts st 12PM till late.",
    },
    {
      question: " Is the festival indoor or outdoor?",
      answer:
        "Raha Fest is an outdoor event.",
    },
    {
      question: "Will there be parking?",
      answer:
        "Yes, there will be enough parking for everybody during the event.",
    },
    {
      question: " Do i need to print out my ticket?",
      answer:
        "No, we will scan your e-ticket from the screen of your phone.Just make sure to already have your ticket on your phone and the brightness of your screen is turned up when waiting in line.",
    },
    {
      question: " Which items aren't allowed inside the festival venue?",
      answer:
        "Soft drugs, hard drugs, food, any drink, glassware, plastic bottles, cans, flags, sticks, umbrellas, pets, banners, objects with discriminationg or provocative texts , sot weapons or other objects that could be used as a weapon are not allowed.",
    },
    {
      question: "Will there be medical services on site? ",
      answer:
        "Yes. Medical stations will be clearly visible at the event and marked on the festival maps.",
    },
    {
      question: "What should I do if I lost/found something?",
      answer:
        "If you lose or find something, you can go to the lost and found tent.Everything will be collected there.",
    },
  ];

  return (
    <Container>
      <motion.img
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -300 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          bounce: 0.3,
          type: "spring",
        }}
        
      />
      <div className="items">
        
    
      
     
        
        <section className="faqs">
        <h2 className="text-4xl font-bold text-center mt-8 mb-12">Frequently Asked Questions</h2>

          <div className="container faqs__container">
            {faqContent.map((faq, index) => (
              <article
                key={index}
                className={`faq ${openFAQs[index] ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq__icon">
                  <i>{openFAQs[index] ? <FaMinus /> : <FaPlus />}</i>
                </div>
                <div className="question__answer">
                  <h4 className="font-bold">{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 12%;
  background: var(--backgroundGradient2);
  img {
    width: 40%;
    margin: auto;
    display: flex;
    margin-bottom: 3em;
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 4em;
    .item {
      display: flex;
      flex-direction: column;
      gap: 1em;
      ol {
        margin-left: 14px;
        span {
          color: black;
          font-weight: 500;
        }
      }
    }
  }

  .faqs{
    
}

.faqs__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.faq{
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    height: fit-content;
    cursor: pointer;
}

.faq h4{
    font-size: 1rem;
    line-height: 2.2;
    color: black;
}

.faq__icon{
    align-self: flex-start;
    font-size: 1.2rem;
}

.faq p{
    margin-top: 0.8rem;
    display: none;
    color: blue;
}

.faq.open p{
    display: block;
}


  @media (min-width: 1300px) {
    padding: 7em 18%;
  }
  @media (max-width: 500px) {
    padding: 7em 3%;
    img {
      width: 90%;
    }
  }
`;

export default About;