import React from 'react'
import GitHub from "../img/github-mark-white.png"
import Linkedin from "../img/icons8-linkedin.svg"
import Photo from "../img/foto_curriculo.jpg"
import Curriculo from  "../img/curriculo.png"
import Whatsapp from "../img/whatsapp.svg"


const Profile = () => {
  return (
    <div className = "flex justify-between flex-col lg:flex-row max-w-[1240px] mx-auto px-4 mb-20 lg:mb-[300px] mt-[150px] lg:mt-[200px] text-white">

      <div className = "flex-column text-center lg:text-start">

        <h1 className="text-8xl mb-20">João Dorea</h1>
        <b className="">IOS DEVELOPER & BI ANALYST</b>

        <p className="font-bold"> 26, lives in Niteroi, RJ, Brazil. Communicative, proactive and dedicated.

</p>
<div className="w-[50%] lg:w-[100%] ml-[33%] lg:ml-[0%] mt-5">
<a href={Curriculo} download><div className="bg-[#ededed] min-w-[20px] w-[140px] pt-2 pb-2 pl-4 pr-4 rounded-2xl mt-5" >
  
  <b className="bg-[#ededed] text-[#313131]">Download CV </b>
  </div>
  </a>
<div className="flex flex-r8 mt-5 ml-2.5 lg:ml-0">


<a href="https://github.com/joaopdorea" target="_blank"><img className="h-8 mr-3" src={GitHub}/></a>
<a href="https://www.linkedin.com/in/joaopdorea/" target="_blank"><img className="h-8 mr-3"src={Linkedin}/></a>
<a href="https://wa.me/5521996220199" target="_blank"><img className="h-8 mr-3"src={Whatsapp}/></a>
</div>


</div>


      </div>


      <div className="mt-5 lg:mt-0">

      <img
  className="rounded-full hidden md:flex w-400 h-400 object-cover"
  src={Photo}
/>

        


</div>




    </div>
  )
}

export default Profile