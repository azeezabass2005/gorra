import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import { motion } from 'framer-motion';

const Loader = ({ setLoading }: any) => {
  const variants = {
    initial: { opacity: 1, scale: 1, backgroundColor: "transparent" },
    animate: { opacity: 0, scale: 2.4, backgroundColor: "transparent", transition: { duration: 1, delay: .1 } },
    exit: { opacity: 0, scale: 0, backgroundColor: "#5356FF", transition: { duration: .2 } },
 };
 const handleAnimationComplete = () => {
  setLoading(false)
 }
  return (
    <div className='flex justify-center items-center w-full h-[100vh]'>
      <motion.div initial="initial" animate="animate" exit="exit" variants={variants} onAnimationComplete={handleAnimationComplete} className=''>
        <CirclesWithBar
          height="120"
          width="120"
          color="#378CE7"
          outerCircleColor="#378CE7"
          innerCircleColor="#378CE7"
          barColor="#378CE7"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </motion.div>
    </div>
  )
}

export default Loader