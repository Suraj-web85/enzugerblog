import React from "react";
import First from "../../components/WhyEnzugerComponent/First/First";
import Second from "../../components/WhyEnzugerComponent/Second/Second";
import Third from "../../components/WhyEnzugerComponent/Third/Third";
import Fourth from "../../components/WhyEnzugerComponent/Fourth/Fourth";
import Fifth from "../../components/WhyEnzugerComponent/Fifth/Fifth";
import Sixth from "../../components/WhyEnzugerComponent/Sixth/Sixth";
import Seventh from "../../components/WhyEnzugerComponent/Seventh/Seventh";
import Eighth from "../../components/WhyEnzugerComponent/Eighth/Eighth";
import TrustByInd from "../../components/HomeComponent/TrustByInd/TrustByInd";
import Order from "../../components/Order/Order";

const myData = [
  "Backed by more than 40 years of research, a healthy low GI lifestyle is a sustainable way to improve overall good health across all stages of life.",
  "A low GI diet focuses on the quality of carbohydrates you eat. Low GI carbohydrates are digested helping you keep your blood sugar stable, whereas high GI carbohydrates cause your blood glucose levels to rise and crash.",
  "In our daily diet, if we replace high GI carbohydrate and nutrients with Low GI food that balances the diet. Likewise replacing all your sweetener with ENZUGER, the same balance you put in the place.",
  "Carbohydrates, Fat, Protein are an essential part of our diet since they provide fuel (Calories) for the body. However, A good balance of these macronutrients is essential for your fitness goals.",
];

const WhyEnzuger = () => {
  return (
    <>
      <First />
      <Second
        heading="Thoughts behind"
        subHeading="TECHNOLOGY"
        content1=" Day by day, food innovation and food technology are changing, and we
                are slowly becoming aware that overconsumption of anything,
                including water, is bad for our health. Our food habits should be
                diverse so that we can obtain all the necessary macros and micros in
                the required quantities. Enzuger is one such food that focuses on
                overall good health. "
        content2="We will highlight the ingredients, ensuring
                they are in the correct form. The recipe is a great help for good
                health, and consuming 25g to 30g daily provides sustained energy.
                Adding Enzuger to your diet doesn't require changing your current
                eating habits; you can continue enjoying the same recipes you like
                in your daily meals. That's the added advantage of Enzuger."
      />
      <Second
        heading="Enzuger with its"
        subHeading="INGREDIENTS"
        content1="Enzuger wants you to meet its special ingredients, first is crystalline fructose. It might sound like a tricky term, but don't get it mixed up with HFCS - it's just another name for fruit sugar. Enzymes like glucose oxidase help metabolize carbohydrates including sugars and fructose to improve digestion, metabolism, absorption and assimilation of nutrients. "
        content2="But wait, there's more! Our mix also has special fibers, like inulin and beta-glucan, that are like superheroes fighting bad cholesterol and boosting the good one. And don't forget about our prebiotics, like FOS, that are like friendly helpers for your gut and make your immune system stronger."
        content3="Imagine eating our mix is like having a bowl of delicious mixed fruits - it's a healthier way to make things sweet. Along with fructose, all these ingredients work together to create a tasty treat. Enzuger scientist has three decades of experience behind it, Enzuger wants to make sure you feel great, stay full longer, and enjoy your food without any worries about your lifestyle."
        flipLayout={true}
      />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth head="Why LOW GI?" subHead="(GLYCEMIC INDEX)" />
      <Seventh
        headSec="LOW GI BENEFITS"
        subSec={`A low GI diet could be beneficial for managing or preventing a number of health conditions.`}
      />
      <Sixth
        head="WHY LOW"
        subHead="INSULIN LOAD?"
        flipLayout={true}
        addData={true}
      />
      <Eighth />
      <TrustByInd />
      <Order />
    </>
  );
};

export default WhyEnzuger;
