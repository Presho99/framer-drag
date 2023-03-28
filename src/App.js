import React, { useRef } from "react";
import "./App.css";
import { motion, useDragControls } from "framer-motion";

function App() {
  const parentRef = useRef();
  const controls = useDragControls()
  return (
    <div className="App" ref={parentRef}>
      <motion.div
        className="box1"
        drag
        dragConstraints={parentRef}
        dragControls={controls}
        dragListener={false}
       
      >
        <div className="box2"
        onPointerDown={(e) => controls.start(e)}
         >

        </div>
      </motion.div>
    </div>
  );
}

export default App;
