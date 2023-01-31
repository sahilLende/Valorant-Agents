import React from "react";
import { navLinks } from "../constants/textData";

 export default function NavUl({menuStatus,changeMenuStatus}){
    return(
             <ul
                  className={`
                    ${menuStatus?"flex-col":"hidden"}
                    
                    sm:flex-row
                    list-none sm:flex
                    text-center 
                    justify-center sm:justify-between
                    items-center`}   
             >
                                                                                                       
                {navLinks.map((nav,index)=>(
                    <li key={nav.id} 
                      className={`font-poppins
                      font-normal
                      cursor-pointer
                      text-xs
                      sm:text-xl
                      hover:text-red-600 
                      transition-color delay-10 duration-30
                   
                    ${index===navLinks.length-1?'mb-0':'mb-1'}
                    ${index===navLinks.length-1?'sm:mr-0':'sm:mr-10'}           `
                    }>
                        <a 
                         href={`#${nav.id}`}>
                        {nav.title}
                        </a>
                    </li>
                    )  
                )}
            </ul>
          
    )
}