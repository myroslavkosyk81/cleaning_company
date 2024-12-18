import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react';


const Speech = () => {
  return (
    <motion.div className='bubbleContainer' animate={{opacity: [0,1]}} transition={{ duration: 3}}>
      <div className="bubble">
            <TypeAnimation
            sequence={[
            // Same substring at the start will only be typed out once, initially
            'We clean apartments',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'We clean penthouses',
            1000,
            'We clean offices',
            1000,
            'We clean mansions',
            1000
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            deletionSpeed={60}
            repeat={Infinity}
         />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech