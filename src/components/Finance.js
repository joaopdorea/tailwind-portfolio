import React from 'react'
import {useState} from 'react'
import Photo from '../img/finance-app.png'

const Finance = () => {


  return (
    <div className=" text-white bg-[#141414]" id ="experiences">

<div className="justify-between items-center h-[1000px] lg:h-[850px] max-w-[1240px] mx-auto px-4 bg-[#141414] pt-[50px] sm:pt-[100px]">
    <b className="text-3xl bg-[#141414]"> Finance App </b>


     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 bg-[#141414] ">

        <div className={"grid1-item bg-[#141414] h-80  ease-in-out duration-500"}>

        <img className ="rounded-2xl mt-20" src={Photo} />
      


        </div>


        <div className="grid1-item bg-[#141414] h-80 ease-in-out duration-500">


<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> Register customers, obtaining the name and email of the customer/user. With this information, the customer fills in the company's name he wants to get a real-time quote for the value of the share, and also receive alerts via email if the share has a favorable price, whether buying or selling the share.

 </p>
</div>

<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> Django was used to create this project. This project covered concepts of WebScraping (Python), database (MySql) and web interface (Html/CSS).</p>
</div>



</div>


       








</div>













</div>
</div>
  )
}

export default Finance