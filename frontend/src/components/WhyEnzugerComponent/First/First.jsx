import React from 'react'
import "./First.css"
import Product_1 from "@images/Enzugerbottle.webp";

const First = () => {
  return (
    <div className="container-1 sflex con">
      <div className="col-1">
        <span className='h1'>WHY</span>
        <h1 className='h2'>ENZUGER ?</h1>
        <div className="bar"></div>
        <p className='tx-para mpara'>The simplest way to understand Enzuger is to dive deep and
          learn more about it. Behind Enzuger, there is a decade of research and development.</p>
        <br />
        <p className='tx-para mpara'>During this period, we have completed the patent work, and the patent has been granted in the USA. Additionally, it is currently in the hearing stage in various countries, including India. While working
          on Enzuger, the sole goal is to use natural ingredients along with providing health benefits.</p>
      </div>
      <div className="col-1"> 
        <div className="back sflex">
        <img src={Product_1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default First
