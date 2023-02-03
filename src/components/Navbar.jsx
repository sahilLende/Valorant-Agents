import React from 'react'
import styled from 'styled-components'
import {close, logo, menu} from "../../src/assets"
import {navLinks} from "../constants/textData"
import { useState } from 'react'
import {NavUl} from './index'
import { themeContext } from './themeContext'
import { lightTheme,darkTheme } from '../theme'

 function Navbar(){
    const isDark=React.useContext(themeContext)

     const [toggleMenu, setToggleMenu] = useState(false)
    return(
        <nav 
           style={{
            // A custom class could also come here instead of inline style
            boxShadow: isDark? "0px 0px 5px 3px rgba(230,23,230,1)": "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.3)"}}     
            className=' flex flex-col sm:flex-row w-full  justify-between items-center py-1 px-6 mb-2 mt-2'>
            <img  src={logo}
                className="w-[124px] h-[50px] bg-contain hover:scale-50 transition-all duration-75 delay-75" 
            alt='Valorantlogo'
            />
            <NavUl menuStatus={toggleMenu}
              
            />
            <div
                className='sm:hidden overflow-hidden w-8 h-8 border-red-900'
            >
                <img src={toggleMenu?close:menu} alt="menu-button"
                    className='object-contain'
                    onClick={()=>setToggleMenu((prev)=>!prev)}   
                />
            </div>
            
                
        </nav>
    )
 }



export default Navbar
