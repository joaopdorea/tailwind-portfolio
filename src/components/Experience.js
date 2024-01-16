import React from 'react'
import {useState} from 'react'

const Experience = () => {

    const [optionOver, setOptionOver] = useState(4)

    function handleOptionOver(opvr) {
        setOptionOver(opvr)
      }

  return (
    <div className="justify-between items-center max-w-[1240px] mx-auto px-4 text-white mt-20" id ="experiences" onMouseOut={() => handleOptionOver(4)}>

    <b className="text-3xl"> Experiences </b>


     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 ">

        <div className={optionOver == 1 | optionOver == 4 ? "grid1-item bg-[#141414] rounded-xl h-80 shadow-lg shadow-black ease-in-out duration-500" :  "grid1-item bg-[#141414] rounded-xl h-80 shadow-lg shadow-black ease-in-out duration-500 opacity-25"} onMouseOver={() => handleOptionOver(1)}>

        <div className="mt-10 bg-[#141414]">
        <b className="text-2xl bg-[#141414] ml-5"> Data Governance Intern</b>
        </div>

        <div className="mt-5 bg-[#141414]">
        <b className="text-md bg-[#141414] ml-5"> Ipiranga | October 2021 - July 2022</b>
        </div>

        <div className="mt-5 bg-[#141414]">
        <b className="text-lg bg-[#141414] ml-5"> Job Description</b>
        </div>

        <div className="mt-5 bg-[#141414]">
        <p className="text-md bg-[#141414] ml-5 w-[90%]"> Worked in the Data Governance area, at the company Ipiranga. In this work, I was able to build dashboards in BI, create roadmaps, monitoring spreadsheets and create internal communications (posts and videos).</p>
        </div>
      


        </div>


        <div className={optionOver == 2 | optionOver == 4 ? "grid1-item bg-[#141414] rounded-xl h-80 shadow-lg shadow-black ease-in-out duration-500" :  "grid1-item bg-[#141414] rounded-xl h-80 shadow-lg shadow-black ease-in-out duration-500 opacity-25"} onMouseOver={() => handleOptionOver(2)}>

<div className="mt-10 bg-[#141414]">
<b className="text-2xl bg-[#141414] ml-5"> Business Inteligence Intern</b>
</div>

<div className="mt-5 bg-[#141414]">
<b className="text-md bg-[#141414] ml-5"> Globo | August 2022 - Now</b>
</div>

<div className="mt-5 bg-[#141414]">
<b className="text-lg bg-[#141414] ml-5"> Job Description</b>
</div>

<div className="mt-5 bg-[#141414]">
<p className="text-md bg-[#141414] ml-5 w-[90%]"> In my current job, I build tools in Excel and Power Apps, create dashboards in Power BI.</p>
</div>



</div>


       








</div>














</div>
  )
}

export default Experience