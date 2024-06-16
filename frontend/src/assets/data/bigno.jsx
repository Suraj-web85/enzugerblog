import noaftertaste from "@images/bigno/noaftertaste.svg";
import nosugar from "@images/bigno/nosugar.svg";

import noartificalsweetner from "@images/bigno/noartificialsweetner.svg";
import nofragnance from "@images/bigno/nofragnance.svg";
import noaddedcolors from "@images/bigno/noaddedcolours.svg";
import nopreservatives from "@images/bigno/nopreservatives.svg";

const bignodata = [
  {
    id: 1,
    title: "Reason #1",
    description:
      "A sweetener should be pleasantly sweet so we say a big No for bitter aftertaste or lingering sweetness. NO sugar is the added benefit of our sweetener.",
    titImg: [
      {
        img: noaftertaste,
        title: "No After-Taste",
      },
      {
        img: nosugar,
        title: "No Sugar",
      },
    ],
  },
  {
    id: 2,
    title: "Reason #2",
    description:
      "We get energy from natural foods. We need energy all the time; when we run, jump, sing, and even when we sleep. Enzuger is packed with energy, contains NO Artificial Sweeteners and any other Low or Zero Calorie sweeteners.",
    titImg: [
      {
        id: 1,
        img: noartificalsweetner,
        title: "No Artificial Sweetners",
      },
      {
        id: 2,
        img: nofragnance,
        title: "No Fragnance",
      },
      {
        id: 3,
        img: noaddedcolors,
        title: "No Added Colours",
      },
      {
        id: 4,
        img: nopreservatives,
        title: "No Preservatives",
      },
    ],
  },
];

export default bignodata;
