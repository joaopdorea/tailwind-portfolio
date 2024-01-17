import React from 'react'
import {useState} from 'react'
import Photo1 from '../img/treinando bi-2.png'
import Photo2 from '../img/treinando bi-3.png'
import Photo3 from '../img/treinando bi-4.png'

const Pet = () => {

    

  return (
    <div className=" text-white bg-[#141414]" id ="experiences">

<div className="justify-between items-center lg:h-[1600px] max-w-[1240px] mx-auto px-4 bg-[#141414] pt-[50px] sm:pt-[100px]">
    <b className="text-3xl bg-[#141414]"> Pet Dashboard </b>


     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 bg-[#141414] ">

        <div className={"grid1-item bg-[#141414] h-80  ease-in-out duration-500"}>

        <img src={Photo1} />
      


        </div>



        <div className="grid1-item bg-[#141414] h-80 ease-in-out duration-500">


<div className="mt-5 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> Dashboard of a Pet Shop, combining visual & important data.</p>
</div>

<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> All frames requested by the client, helping in the decision process.</p>
</div>



</div>


       








</div>



<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-40 bg-[#141414] ">

        <div className={"grid1-item bg-[#141414] h-80  ease-in-out duration-500"}>

        <img src={Photo2} />
      


        </div>



        <div className="grid1-item bg-[#141414] h-80 ease-in-out duration-500">


<div className="mt-5 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%] mt-20"> A screen that shows how the company is going, financially, throughout the year. Furthermore, this powerful dashboard is able to compare the current year with previous years. </p>
</div>

<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"></p>
</div>



</div>


       








</div>





<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-40 bg-[#141414] ">

        <div className={"grid1-item bg-[#141414] h-80  ease-in-out duration-500"}>

        <img src={Photo3} />
      


        </div>



        <div className="grid1-item bg-[#141414] h-80 ease-in-out duration-500">


<div className="mt-5 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%] mt-20"> Additionally, this dash shows the most important indicators for the Pet Business. Net Revenue, Total Sales, Total Cost and more.</p>
</div>

<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> </p>
</div>



</div>


       








</div>













</div>
</div>
  )
}

export default Pet