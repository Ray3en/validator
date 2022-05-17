import { MotionBlockItem } from "./BlockItem";
import { motion } from "framer-motion";
import { MotionTitle } from "./Title";
import { photo } from "./object";
import { useState } from "react";

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

const blockAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    })
}

function BlockList() {
    const [post, setPost] = useState(photo)
    return (
      <motion.div 
      initial='hidden'
      whileInView='visible'

      className="container">
        <MotionTitle custom={5} variants={textAnimation}/>

        {post.map((e,ind)=> <MotionBlockItem custom={ind + 1} variants={blockAnimation} key = {e.id} img = {e.url} title = {e.title}/>)}
      </motion.div>
    );
  }
  
  export default BlockList;
  