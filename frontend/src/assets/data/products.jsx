// import img1 from "@images/Enzugerbottle.webp";
import img1 from "@images/products/prod1.webp";
import img1a from "@images/products/prod1a.webp";
import img1b from "@images/products/prod1b.webp";
import img1c from "@images/products/prod1c.webp";
import img1d from "@images/products/prod1d.webp";
import img1e from "@images/products/prod1e.webp";

import img2 from "@images/products/prod2.webp";
import img2a from "@images/products/prod2a.webp";
import img2b from "@images/products/prod2b.webp";
import img2c from "@images/products/prod2c.webp";

import img3 from "@images/products/Prod3.webp";
import img3a from "@images/products/prod3a.webp";
import img3b from "@images/products/prod3b.webp";
import img3c from "@images/products/prod3c.webp";

const products = [
  {
    productImg: img1,
    productTitle:
      "400 gm Enzuger  | 1:1 Sugar Replacement for Everyone | PCOS & Diabetic Friendly | NO Artificial Sweeteners | NO Sugar | NO After-Taste",
    productRating: 5,
    productCategory: "Nutrition",
    productMRP: 599.0,
    productOfferPrice: 549.0,
    productImages: [img1, img1a, img1b, img1c, img1d, img1e],
    image1: img1a,
    image2: img1c,
    heading1: "Energized anytime of the day",
    heading2: "Enzuger for Daily Beverages!",
    description1:
      "Adding Enzuger to your diet can help lower overall diet glycemic load and insulin response, as well as deliver balanced amounts of carbohydrates. To reap these benefits, aim to consume 20-25 gms of Enzuger daily, which equates to 5-10% of your daily energy intake.",
    description2:
      "Looking for a healthy alternative to sugar or other chemical-based sweeteners? Enzuger is a great choice for those who want to add sweetness to beverages without compromising their health. One bottle of Enzuger can sweeten up to 80 cups of tea or coffee, or 100 lemon juices!",
    additionalInfo: [
      "Net Contents: 400 gms",
      "Made in India",
      "Store in a cool dry place. Keep the lid tightly closed after use.",
    ],
    inStock: 500,
    comments: [
      {
        username: "Uma Chauhan",
        commentDate: "January 22, 2021",
        comment:
          "I love to cook and I cannot compromise on taste. Enzuger, with its lovely, grainy texture and zero after-taste, has been the easiest switch to managing my diabetes. It's not just about the reduction of the sugar level, I feel more energetic now. My food intake has also reduced as I feel fuller yet lighter.",
        rating: 5,
      },
      {
        username: "Santosh Amonkar",
        commentDate: "February 5, 2021",
        comment:
          "I am very happy with this sweetener. It has a clean, sweet taste and doesn't leave a strange aftertaste in my mouth.",
        rating: 4,
      },
      {
        username: "Anita Gohil",
        commentDate: "February 6, 2021",
        comment:
          "I used to feel fatigued and lethargic and my blood sugar level used to be about 220. I switched to Enzugef and within two months of regular use, my random sugar level is normal, digestion has improved and I am feeling fresh and energetic.",
        rating: 5,
      },
      {
        username: "Sangeeta Kubal",
        commentDate: "March 5, 2021",
        comment:
          "It has a natural sweetness and doesn't have a weird aftertaste like some other artificial sweeteners.",
        rating: 5,
      },
      {
        username: "Rohil Mehta",
        commentDate: "March 6, 2021",
        comment:
          "I quit sugar the moment I was diagnosed with diabetes. I attempted to control through diet, medication, and lifestyle change. I started Enzuger and now use it every day in my tea, coffee, and lemon juice. It has made me feel incredibly energetic.",
        rating: 5,
      },
      {
        username: "Gayatri Patel",
        commentDate: "April 6, 2021",
        comment:
          "When my 11-year-old daughter was diagnosed with diabetes, after complaining of dizziness and rapid weight gain, as a mother I felt very helpless. Doctors advised controlling food and stopping the consumption of sugars, which is heartbreaking for a kid. Enzuger, recommended by my father-in-law, a long-term diabetic, has changed our lives, and now, Suhan can indulge in all treats and sweets.",
        rating: 5,
      },
    ],
    totalRating: 4.8,
    productStatus: "published",
    pricing: {
      oneTimePurchase: [
        { minQuantity: 2, pricePerUnit: 499 },
        { minQuantity: 4, pricePerUnit: 479 }
      ],
      subscriptionPurchase: [
        { minQuantity: 2, pricePerUnit: 479 },
        { minQuantity: 4, pricePerUnit: 449 }
      ]
    },
    deliveryDuration: ["Delivery Every Month", "Delivery Every Six Months"],
    bulletPoints: {
      inSubscription: ["Free Shipping", "Never Run Out of Product", "Cancel Anytime"],
      belowAddToCart: ["Cash on Delivery Available", "Free Door Delivery"]
    },
    singleBanner: img1,


  },
  {
    productImg: img2,
    productTitle:
      "400gms Bottle & 5gm, 30 Sachets, Enzuger Box | 1:1 Sugar Replacement for Everyone | PCOS & Diabetic Friendly | NO Artificial Sweeteners | NO Sugar | NO After-Taste",
    productRating: 3,
    productMRP: 898.0,
    productCategory: "Nutrition",
    productOfferPrice: 778.0,
    productImages: [img2, img2a, img2b, img2c],
    additionalInfo: [
      "Net Contents: 400 gms",
      "Made in India",
      "Store in a cool dry place. Keep the lid tightly closed after use.",
    ],
    inStock: 3000,
    productStatus: "draft",
  },
  {
    productImg: img3,
    productTitle:
      "5gm, 30 Sachets, Enzuger Box | 1:1 Sugar Replacement for Everyone | PCOS & Diabetic Friendly | NO Artificial Sweeteners | NO Sugar | NO After-Taste",
    productRating: 4,
    productMRP: 299.0,
    productCategory: "Nutrition",
    productOfferPrice: 279.0,
    productImages: [img3, img3a, img3b, img3c],
    additionalInfo: [
      "Net Contents: 400 gms",
      "Made in India",
      "Store in a cool dry place. Keep the lid tightly closed after use.",
    ],
    inStock: 4200,
    productStatus: "published",
  },
];

export default products;
