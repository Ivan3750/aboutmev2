import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationText = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
        color: "#ffffff",
      });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      style={{ fontSize: "24px", margin: "50px 0" }}
    >
      Прокрутіть вниз, щоб побачити цей текст.
    </motion.div>
  );
};

export default AnimationText;
