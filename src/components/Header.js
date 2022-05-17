import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    })
}

function Header() {
    return (
      <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}

      className="header">

        <motion.p custom={1} variants={textAnimation} className="header_item">Home</motion.p>
        <motion.p custom={2} variants={textAnimation} className="header_item">About</motion.p>
        <motion.p custom={3} variants={textAnimation} className="header_item">Contact</motion.p>
        <motion.p custom={4} variants={textAnimation} className="header_item">FAQ</motion.p>
      </motion.div>
    );
  }
  
  export default Header;
  