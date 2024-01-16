import React from 'react'
import {useState} from 'react'
import Photo from '../img/university.png'

const University = () => {


  return (
    <div className=" text-white bg-[#141414]" id ="experiences">

<div className="justify-between items-center lg:h-[850px] max-w-[1240px] mx-auto px-4 bg-[#141414] pt-[100px]">
    <b className="text-3xl bg-[#141414]"> University Backend </b>


     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 bg-[#141414] ">

        <div className={"grid1-item bg-[#141414] h-80  ease-in-out duration-500"}>

        <img src={Photo} />
      


        </div>


        <div className="grid1-item bg-[#141414] h-80 ease-in-out duration-500">


<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> An university's system, with many entities, that relate with each other. The relationships were estabilished using JPA. After ending this project, it is possible to realize how important it is to test and validate in every part of the process.</p>
</div>

<div className="mt-20 bg-[#141414]">
<p className="text-xl bg-[#141414] ml-5 w-[90%]"> Made and tested with SpringBoot & H2 Database & Postman.</p>
</div>



</div>


       








</div>













</div>
</div>
  )
}

export default University