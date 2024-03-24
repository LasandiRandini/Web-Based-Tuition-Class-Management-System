import  { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "../assets/logo.png";


const PNav = () => {
    let Links =[
        {name:"Video Lessons",link:"/Video"},
        {name:"My Lessons",link:"/MyVideo"},
        {name:"Practical",link:"/Practical"},
        {name:"Quiz",link:"/Quiz"},
        {name:"Instruction",link:"/Instruction"},
        {name:"Profile",link:"/PProfile"}
       ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full  fixed top-0 left-5  '>
          <div className='md:px-10 py-4 px-20  md:flex justify-between items-center
             bg-white '>
                <div className=" flex cursor-pointer items-cente gap-2">

                    <img src={Logo} alt="Logo" className="h-12 w-auto" />
                    <span className='font-bold text-3xl text-lightblue ml-2' >ET LABS</span>
      </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link, index) => (
                    <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-red-400 duration-500'>{link.name}</a>
                    </li>))
                }
                
        
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default PNav;