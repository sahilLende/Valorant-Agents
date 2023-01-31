import React, { useState } from 'react'
import styles from './style'
import {  Navbar,Hero,Footer,AgentCatalouge } from './components'
import { darkTheme,lightTheme } from './theme'
import {themeContext} from "./components/themeContext"
 
const App = () => {
  const [isDark,setDark]=useState(false)
 
  return (
  <themeContext.Provider value={isDark}>
    <div style={isDark?darkTheme:lightTheme} className= "w-full overflow-hidden min-w-[200px]">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <button style={{width:"50px "}} onClick={(event)=>setDark(prev=>!prev)}>Dark</button>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero/>
        </div>
      </div>


      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <AgentCatalouge theme={isDark}/>
        </div>
      </div>

      <div className={`bg-red-400 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <Footer/> 
        </div>
      </div>

    </div>
    </themeContext.Provider>  
  )
}

export default App
