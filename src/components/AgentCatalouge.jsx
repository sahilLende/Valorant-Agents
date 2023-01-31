
import { agentData , roles} from '../constants/textData'
import RoleContainer from './RoleContainer'
import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { color } from '@mui/system';
import { darkTheme,lightTheme } from '../theme';
import { themeContext } from './themeContext';



 const AgentCatalouge = () => {

  const [selectedRole, setSelectedRole] = useState("All")
   const isDark=React.useContext(themeContext)


  return (
  < >
    <Box sx={{ width:"50%",marginX:0, marginTop:"1.25rem", marginBottom:"1.25rem", minWidth: 120 ,boxShadow:isDark?"0px 0px 5px 3px rgba(230,23,230,1)":" 0 0 4px 5px rgba(230,23,30,1)"}}  className="text-red-600 mt-5 w-[30vw]"  >
      <FormControl fullWidth  className='text-red-400' >
        <InputLabel className='text-red' >Roles</InputLabel>
        <Select
          
          value={selectedRole}
          label="Role"
          onChange={(event)=>{ setSelectedRole(event.target.value)}}
        >
          <MenuItem value={"All"}>{"All"}</MenuItem>
          {roles.map((role)=><MenuItem value={role}>{role}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
    {
      selectedRole!=="All" ? <RoleContainer   role={selectedRole} /> : roles.map((role)=><RoleContainer  key={role} role={role} />)
    }
  </>
  )
  }
export default AgentCatalouge

