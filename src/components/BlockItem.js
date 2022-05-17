import { motion } from "framer-motion";
import { forwardRef } from "react";

const BlockItem = forwardRef((props, ref) => {
    const {img, title} = props
    return (
      <div ref={ref} 
      className="container_item">
        <img className="img_size" src={img}></img>
        <p>{title}</p>
      </div>
    );
  })
  
 export const MotionBlockItem = motion(BlockItem)
  