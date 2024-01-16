import React from 'react'
import CirclePending from "../img/circlePending.svg"
import CircleReady from "../img/circleReady.svg"
import {useState} from 'react'


const Project = () => {


    const [optionOver, setOptionOver] = useState(4)

    function handleOptionOver(opvr) {
        setOptionOver(opvr)
      }
    

  return (
    <div className="justify-between items-center max-w-[1240px] mx-auto px-4 text-white" id ="projects">

        <b className="text-3xl"> Projects </b>


         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10" onMouseOut={() => handleOptionOver(4)}>

            <div onMouseOver= {() => handleOptionOver(1)} className={optionOver == 1 | optionOver == 4 ? "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer  ease-in-out duration-500" : "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer opacity-20 ease-in-out duration-500" }>

            <div className= "mt-20 bg-[#141414]">
                <b className="text-4xl bg-[#141414]"> iBus App</b>
                <div className = "mt-10 flex flex-row justify-center bg-[#141414]">
                    <div className="text-lg bg-[#ededed] text-[#313131] rounded-2xl pt-2 pb-2 pr-4 pl-4">Kotlin</div>


                </div>

                <div className = "flex flex-row items-center mt-7 bg-[#141414] justify-center">
                    <div className="bg-[#141414]"><img className="mr-5 bg-[#141414]" src={CirclePending}/></div>
                    <p className="bg-[#141414]">Developing...</p>


                </div>

             </div>


            </div>


            <div  onMouseOver= {() => handleOptionOver(2)} className={optionOver == 2 | optionOver == 4 ? "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer ease-in-out duration-500" : "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer opacity-20 ease-in-out duration-500" }>

            <div className= "mt-20 bg-[#141414]">
                <b className="text-4xl bg-[#141414]"> University</b>
                <div className = "mt-10 flex flex-row justify-center bg-[#141414]">
                    <div className="text-lg bg-[#ededed] text-[#313131] rounded-2xl pt-2 pb-2 pr-4 pl-4 mr-3">Java</div>
                    <div className="text-lg bg-[#ededed] text-[#313131] rounded-2xl pt-2 pb-2 pr-4 pl-4">SQL</div>


                </div>

                <div className = "flex flex-row items-center mt-7 bg-[#141414] justify-center">
                    <div className="bg-[#141414]"><img className="mr-5 bg-[#141414]" src={CircleReady}/></div>
                    <p className="bg-[#141414]">Ready</p>


                </div>

             </div>


            </div>

            <div onMouseOver= {() => handleOptionOver(3)} className={optionOver == 3 | optionOver == 4 ? "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer ease-in-out duration-500" : "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer opacity-20 ease-in-out duration-500" }>

<div className= "mt-20 bg-[#141414]">
    <b className="text-4xl bg-[#141414]"> Finance App</b>
    <div className = "mt-10 flex flex-row justify-center bg-[#141414]">
        <div className="text-lg bg-[#ededed] text-[#313131] rounded-2xl pt-2 pb-2 pr-4 pl-4">Python</div>


    </div>

    <div className = "flex flex-row items-center mt-7 bg-[#141414] justify-center">
        <div className="bg-[#141414]"><img className="mr-5 bg-[#141414]" src={CircleReady}/></div>
        <p className="bg-[#141414]">Ready</p>


    </div>

 </div>


</div>


<div onMouseOver= {() => handleOptionOver(5)} className={optionOver == 5 | optionOver == 4 ? "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer ease-in-out duration-500" : "grid1-item text-center bg-[#141414] rounded-xl h-80 shadow-lg shadow-black cursor-pointer opacity-20 ease-in-out duration-500" }>

<div className= "mt-20 bg-[#141414]">
    <b className="text-4xl bg-[#141414]"> Pet Dashboard</b>
    <div className = "mt-10 flex flex-row justify-center bg-[#141414]">
        <div className="text-lg bg-[#ededed] text-[#313131] rounded-2xl pt-2 pb-2 pr-4 pl-4">Power BI</div>


    </div>

    <div className = "flex flex-row items-center mt-7 bg-[#141414] justify-center">
        <div className="bg-[#141414]"><img className="mr-5 bg-[#141414]" src={CircleReady}/></div>
        <p className="bg-[#141414]">Ready</p>


    </div>

 </div>


</div>








</div>



 






    </div>
  )
}

export default Project