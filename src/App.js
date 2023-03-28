import React, {useRef} from 'react';
import './App.css';
import {motion} from "framer-motion"

function App() {
  const parentRef = useRef()
  return (
    <div className="App" ref={parentRef}>
      <motion.div className='box1'
      drag
      dragConstraints={parentRef}
      >

      </motion.div>
     
    </div>
  );
}

export default App;
