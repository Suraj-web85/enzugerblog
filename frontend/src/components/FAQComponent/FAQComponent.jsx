import React, { useState } from "react";
import "./FAQComponent.css";
import TopHeader from "../TopHeader/TopHeader";
import FaqData from "./FAQData";
import { Link } from "react-router-dom";

const FAQComponent = () => {
  const [selected, setSelected] = useState(null);
  const [visibleQuestions, setVisibleQuestions] = useState(5);

  const toggleBtn = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const loadMoreQuestions = () => {
    setVisibleQuestions((prev) => prev + 5);
  };

  return (
    <div>
      <TopHeader mainHead="Frequently Asked Questions?" />

      <div className="wrapper">
        <div className="common_questions">
          <div className="div_1">
            <h2>Common Questions</h2>
          </div>
          <div className="div_2">
            <h6>Haven’t found an answer to your query?</h6>
            <Link to="/contact-us"><h4>Contact us</h4></Link>
          </div>
        </div>

        <div className="accordian_section">
          {FaqData.slice(0, visibleQuestions).map((item, i) => (
            <div className="accordian_items" key={item.id}>
              <div className="faq_questions" onClick={() => toggleBtn(i)}>
                <h2>{item.questions}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "faq_answers show" : "faq_answers"}>
                <p>{item.answers}</p>
              </div>
            </div>
          ))}
        </div>
        
        {visibleQuestions < FaqData.length && (
          <button className="load_more" onClick={loadMoreQuestions}>
            Load More...
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQComponent;
