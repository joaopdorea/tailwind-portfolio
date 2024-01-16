import React from 'react'
import {useState} from 'react'
import Hat from '../img/graduation-hat.png'
import Udemy from '../img/udemy.png'
import Languages from '../img/languages.png'

const Academics = () => {

    const [optionOver, setOptionOver] = useState(4)

    function handleOptionOver(opvr) {
        setOptionOver(opvr)
      }

  return (
    <div className="justify-between items-center max-w-[1240px] mx-auto px-4 text-white mt-20" id ="academics" onMouseOut={() => handleOptionOver(4)}>

    <b className="text-3xl"> Academics </b>


     <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 ">

        <div className={optionOver == 1 | optionOver == 4 ? "grid1-item bg-[#141414] rounded-xl h-[460px] shadow-lg shadow-black ease-in-out duration-500" :  "grid1-item bg-[#141414] rounded-xl h-[460px] shadow-lg shadow-black ease-in-out duration-500 opacity-25"} onMouseOver={() => handleOptionOver(1)}>

        <div className="mt-20 bg-[#141414] border border-[#141414] flex flex-row justify-center">
<img src={Hat} className="w-[140px] bg-[#141414] border border-[#141414]" /> 
</div>

<div className="flex flex-col mt-5 bg-[#141414] text-center ">
    <div className="w-[100%] bg-[#141414] text-4xl">  UniLasalle </div>
    <div className="w-[100%] bg-[#141414]  mt-5"> <p className="bg-[#141414] font-bold">System's Analysis Bachelor's Degree</p> </div>
    <div className="w-[100%] bg-[#141414]  mt-5"> <p className="bg-[#141414]">(Sixth Semester)</p> </div>
   
    
    
    
</div>
      


        </div>


        <div className={optionOver == 2 | optionOver == 4 ? "grid1-item bg-[#141414] rounded-xl h-[460px] shadow-lg shadow-black ease-in-out duration-500" :  "grid1-item bg-[#141414] rounded-xl h-[460px] shadow-lg shadow-black ease-in-out duration-500 opacity-25"} onMouseOver={() => handleOptionOver(2)}>

        <div className="mt-20 bg-[#141414] border border-[#141414] flex flex-row justify-center">
<img src={Languages} className="w-[140px] bg-[#141414] border border-[#141414]" /> 
</div>

<div className="flex flex-col mt-5 bg-[#141414] text-center ">
    <div className="w-[100%] bg-[#141414] text-4xl">  VGC College </div>
    <div className="w-[100%] bg-[#141414]  mt-5"> <p className="bg-[#141414] font-bold">English Course</p> </div>
    <div className="w-[100%] bg-[#141414]  mt-5"> <p className="bg-[#141414]">(Vancouver, BC, Canada)</p> </div>
   
    
    
    
</div>



</div>


<div className={optionOver == 3 | optionOver == 4 ? "grid1-item bg-[#141414] rounded-xl h-[460px] shadow-lg shadow-black ease-in-out duration-500" :  "grid1-item bg-[#141414] rounded-xl h-[460px] shadow-lg shadow-black ease-in-out duration-500 opacity-25"} onMouseOver={() => handleOptionOver(3)}>

<div className="mt-20 bg-[#141414] border border-[#141414] flex flex-row justify-center">
<img src={Udemy} className="w-[140px] bg-[#141414] border border-[#141414]" /> 
</div>

<div className="flex flex-col mt-5 bg-[#141414] text-center ">
    <div className="w-[100%] bg-[#141414] text-4xl">  Udemy </div>
    <div className="w-[100%] bg-[#141414]  mt-5"> <p className="bg-[#141414] font-bold">Master Dax</p> </div>
    <div className="w-[100%] bg-[#141414]  mt-5"> <p className="bg-[#141414] ">Data driven</p> </div>
    
   
    
    
    
</div>





</div>


       








</div>














</div>
  )
}

export default Academics