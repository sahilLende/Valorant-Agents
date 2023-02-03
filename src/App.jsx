import React, { useState } from 'react'
import styles from './style' // If you move your styles as classes into yout App.css, you would not need to import it here
import {  Navbar,Hero,Footer,AgentCatalouge } from './components'
import { darkTheme,lightTheme } from './theme'
import {themeContext} from "./components/themeContext"
 
const App = () => {
  const [isDark,setDark]=useState(false)
 
  return (
  <themeContext.Provider value={isDark}>
    {/* We can have a call how theming can be improved */}
    <div style={isDark?darkTheme:lightTheme} className= "w-full overflow-hidden min-w-[200px]">
      {/* <div className='my-composed-style'> <--- It would also keep your jsx nice and clean */}
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          {/* If you are not using the "event", you don't need to define it: () => setDark(prev => !prev) */}
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
