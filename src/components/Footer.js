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

function Footer() {
    return (
      <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      className="footer">

        <motion.p custom={1} variants={textAnimation} className="footer_item">Раз</motion.p>
        <motion.p custom={2} variants={textAnimation} className="footer_item">Два</motion.p>
        <motion.p custom={3} variants={textAnimation} className="footer_item">Три</motion.p>
      </motion.div>
    );
  }
  
  export default Footer;
  