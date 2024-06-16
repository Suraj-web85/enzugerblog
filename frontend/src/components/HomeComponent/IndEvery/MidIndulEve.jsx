import React from "react";

function MidIndulEve() {
  const IndEveData = [
    {
      id: 1,
      heading: "Daily 25 gm of Enzuger, keeps you energies!",
      content:
        "Adding Enzuger to your diet can help lower overall diet glycemic load and insulin response, as well as deliver balanced amounts of carbohydrates. To reap these benefits, aim to consume 20-25 gms of Enzuger daily, which equates to 5-10% of your daily energy intake.",
      img: "/images/Energies.webp",
    },
    {
      id: 2,
      heading: "Enzuger for Daily Beverages!",
      content:
        "Looking for a healthy alternative to sugar or other chemical-based sweeteners? Enzuger is a great choice for those who want to add sweetness to beverages without compromising their health. One bottle of Enzuger can sweeten up to 80 cups of tea or coffee, or 100 lemon juices!",
      img: "/images/Enzuger-1.webp",
    },
  ];
  return (
    <>
      {IndEveData.map((item) => {
        return (
          <div className="secn-col">
            <img src={item.img} alt="" className="energyImg" />
            <div className="col-cont">
              <h3 className="co-cn-hd">{item.heading}</h3>
              <p className="tx-ind-par">{item.content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MidIndulEve;
