import React from 'react'
import {useRef} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'
import Logo from '../img/logo.jpg'


const NavBar = () => {

 const [option, setOption] = useState(false)

 function handleOption() {
    setOption(!option)
  }

  
  return (

    
    <div className = "flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white sticky top-0" >

        
        <a href=""><img className="h-10 mt-4" src={Logo}/></a>

        <ul className ="hidden md:flex">
                    <li className="p-4"><a href="#projects"className="no-underline">Projects</a></li>
                    <li className="p-4 "><a href="#experiences"className="no-underline">Experiences</a></li>
                    <li className="p-4 "><a href="#academics"className="no-underline">Academics</a></li>
        </ul>

        <div className ="block md:hidden"onClick={() => handleOption()}>
            {option ? (
            
            <AiOutlineClose size = {20} className="cursor-pointer"/>
            ) : (
                <AiOutlineMenu size={20}  className="cursor-pointer"/>
            )
} 
            <div className={option ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#313131] ease-in-out duration-500" : "fixed left-[-100%]"}>

            <img className="h-10 mt-5 ml-5" src={Logo}/>
                <ul className ="uppercase p-4">
                    <li className="p-4 border-b border-gray-600"><a href="#projects"className="no-underline">Projects</a></li>
                    <li className="p-4 border-b border-gray-600"><a href="#experiences"className="no-underline">Experiences</a></li>
                    <li className="p-4 border-b border-gray-600"><a href="#academics"className="no-underline">Academics</a></li>
                </ul>
            </div>
        </div>

         

       



    </div>



    
  )
}

export default NavBar