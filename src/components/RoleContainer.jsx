import React from 'react'
import {agentData} from "../constants/textData"
import AgentCard from './AgentCard'




 function RoleContainer({role}) {
    
    return (
    <div >
        
        <h1>{role}</h1>
        <div className='flex flex-wrap justify-evenly gap-2 '> 
        {agentData.filter(agent=>agent.role==role).map((agent)=>{
        return(
            <AgentCard   key={agent.id} data={agent}/>
        )})}
        </div>
    </div>)

}

export default RoleContainer

