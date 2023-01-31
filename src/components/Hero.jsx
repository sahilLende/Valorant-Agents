import React from 'react'
import { heroImg } from '../assets'
import { useState } from 'react'
import {GoToButton} from "./index"

function Hero(){
    
  return(
        <main>
        <div
         style={{ backgroundImage: `url(${heroImg})`}}
         className="relative w-full h-[30vh] sm:h-full px-6 lg:px-8 bg-no-repeat bg-cover bg-opacity-40  ">
          <div className="mx-auto max-w-3xl pt-8 pb-8 sm:pt-20 sm:pb-40 text-xs">
            <div>
              <div 
                className='flex  flex-col sm:justify-start'                
              >
                <h1 className="text-2xl  text-red-600 font-bold tracking-tight sm:text-center sm:text-6xl">
                  Know Your Valorant Agents
                </h1>
                <p className="mt-6  text-[0.4rem] sm:text-[1rem] leading-8  sm:text-center ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                
              </div>
              
            </div>
          </div>
        </div>
      </main>

       
    )
}

export default Hero