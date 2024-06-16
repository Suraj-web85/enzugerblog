import React from "react";
import HeroBanner from "../../components/HomeComponent/HeroBanner/HeroBanner";
import Lookingfor from "../../components/HomeComponent/LookingFor/Lookingfor";
import Bigno from "../../components/HomeComponent/Bigno/Bigno";
import Whyenzuger from "../../components/HomeComponent/WhyEnzuger/Whyenzuger";
import IndulEvery from "../../components/HomeComponent/IndEvery/IndulEvery";
import TrustByInd from "../../components/HomeComponent/TrustByInd/TrustByInd";
import Order from "../../components/Order/Order";
import FBanner from "../../components/FamilyBanner/FBanner";

function Home() {
  return (
    <>
      <HeroBanner />
      <Lookingfor />
      <Bigno />
      <Whyenzuger />
      <div className="con">
        <FBanner />
      </div>
      <IndulEvery />
      <TrustByInd />
      <Order />
    </>
  );
}

export default Home;
