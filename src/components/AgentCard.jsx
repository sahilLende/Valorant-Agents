import React from 'react'
import { themeContext } from './themeContext';




const AgentCard = ({data}) => {

  const isDark = React.useContext(themeContext);
  const agent =data;
   
  console.log(isDark)
    return (
    <div
        key={agent.id}
        style={{
          boxShadow:isDark?"0px 0px 5px 3px rgba(230,23,230,1)":" 0 0 4px 5px rgba(230,23,30,1)",
          transition: "0.3s",}}
          className= "flex flex-col items-center mb-5 w-full h-max sm:w-1/5  mt-5 min-w-[200px]"      
          >
        <img
          style={{
            width:"max-width",
          height:"max-height",
          }}
          src={agent.img}
          alt="agent image"  
          />
        <div className='flex flex-col px-3 py-2 gap-2 text-xs'>
          <h1 className=' font-bold font-sans'>{agent.name}</h1>
          <h3 className=' font-semibold font-sans'>{agent.role}</h3>
          <p><span className='font-semibold'>Bio: </span>{agent.bio}</p>
          <h3 className=' text-center font-semibold font-sans'>Abilities</h3>
          <ul className='list-none'>
             {Object.entries(agent.abilities).map(([key,value])=>{
              return <li key={key}>{value}</li>
             })}
          </ul>
    
        </div>
      </div>
  )
}

export default AgentCard