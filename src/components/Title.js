import { motion } from "framer-motion";
import { forwardRef } from "react";

const Title = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="title"> Cписок фотографий</div>
  );
})

export const MotionTitle = motion(Title)
