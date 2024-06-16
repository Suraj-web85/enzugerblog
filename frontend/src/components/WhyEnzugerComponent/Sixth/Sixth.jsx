import React from "react";
import "./Sixth.css";
var myData = [
  "Backed by more than 40 years of research, a healthy low GI lifestyle is a sustainable way to improve overall good health across all stages of life.",
  "A low GI diet focuses on the quality of carbohydrates you eat. Low GI carbohydrates are digested helping you keep your blood sugar stable, whereas high GI carbohydrates cause your blood glucose levels to rise and crash.",
  "In our daily diet, if we replace high GI carbohydrate and nutrients with Low GI food that balances the diet. Likewise replacing all your sweetener with ENZUGER, the same balance you put in the place.",
  "Carbohydrates, Fat, Protein are an essential part of our diet since they provide fuel (Calories) for the body. However, A good balance of these macronutrients is essential for your fitness goals.",
];

var myData2 = [
  "High insulin levels cause sugar to be taken out of the bloodstream and turned into fat in the fat cells. The low blood sugar levels then have two effects: making you hungry, so you want to eat more, and making you feel less energetic, so you burn fewer calories.",
  "If your body produces too much insulin for too long, it can create enough insulin resistance to cause Type II diabetes.",
  "Experts Says “Eat less, move more” by trying to “Eat less, move more.” Instead, just keep your insulin levels down, and your body will automatically make you want to eat less and move more without you trying at all.",
  "ENZUGER is very low insulin load food. Adding ENZUGER in your diet helps you to lower the insulin and gives sustained energy levels. Thats why people are experiencing high energy among ENZUGER lovers.",
];

const Sixth = (props) => {
  const myContianerClass = props.flipLayout ? "container-8" : "container-6";

  let dataRender = props.addData ? myData2 : myData;

  return (
    <div className={`sflex con ${myContianerClass}`}>
      <div className="column6">
        {dataRender.map((item, index) => (
          <p className="mpara" key={index}>&nbsp;{item}</p>
        ))}
      </div>
      <div className="column7" data-aos="fade-up">
        <h2>{props.head}</h2>
        <h4>{props.subHead}</h4>
      </div>
    </div>
  );
};

export default Sixth;
