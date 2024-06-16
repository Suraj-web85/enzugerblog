import React from "react";
import "./TimeLine.css";

const timelineData = [
  { year: 2021, month: "March", description: "'Enzuger' Launched" },
  {
    year: 2020,
    month: "January",
    description: "Formed Enzuger India Pvt. Ltd.",
  },
  { year: 2018, month: "January", description: "Applied for second patent" },
  {
    year: 2017,
    month: "October",
    description: "Formed an R&D Company, Veganutritech LLP",
  },
  { year: 2017, month: "August", description: "International Patent Applied" },
];

const Timeline = () => {
  return (
    <div className="timeline">
      {timelineData &&
        timelineData.map((item, index) => (
          <div
            className="timeline-item"
            // className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              {/* <p className="timeline-year">{item.year}</p> */}
              <h3 className="timeline-month mpara">{item.month}</h3>
              <p className="timeline-description para">{item.description}</p>
            </div>
            <div className="timeline-dot">
              <p className="timeline-year">{item.year} </p>
            </div>
            <div className="empty-space"></div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
