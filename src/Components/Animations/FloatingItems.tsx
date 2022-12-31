import Beverage1 from "Assets/Beverage1.png";
import Beverage2 from "Assets/Beverage2.png";
import Beverage3 from "Assets/Beverage3.png";
import Beverage4 from "Assets/Beverage4.png";
import { motion } from "framer-motion";

interface FloatingItemsProps {}

const FloatingItems: React.FunctionComponent<FloatingItemsProps> = () => {
  return (
    <div className="absolute hidden lg:block">
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rbg(255,255,255)",
          boxShadow: "0px 0px 8px rbg(255,255,255)",
          transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        dragElastic={0.4}
        className="xl:left-[35rem] left-80 xl:top-36 top-40 w-36 relative"
      >
        <img alt="Beverage" draggable="false" src={Beverage1} className="" />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rbg(255,255,255)",
          boxShadow: "0px 0px 8px rbg(255,255,255)",
          transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "mirror",
          },
          rotate: 30,
        }}
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        dragElastic={0.4}
        className="right-[40rem] top-52 w-36 relative"
      >
        <img alt="Beverage" draggable="false" src={Beverage2} className="" />
      </motion.div>
      <motion.div
        whileHover={{
          textShadow: "0px 0px 8px rbg(255,255,255)",
          boxShadow: "0px 0px 8px rbg(255,255,255)",
          transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "mirror",
          },
          translateX: 15
        }}
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        dragElastic={0.4}
        className="right-44 top-[11rem] w-36 relative"
      >
        <img alt="Beverage" draggable="false" src={Beverage3} className="" />
      </motion.div>
      <motion.div
        whileHover={{
          textShadow: "0px 0px 8px rbg(255,255,255)",
          boxShadow: "0px 0px 8px rbg(255,255,255)",
          transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "mirror",
          },
          translateY: 15
        }}
        drag
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        dragElastic={0.4}
        className="xl:left-[40rem] left-[10rem] top-44 xl:top-[11rem] w-36 relative"
      >
        <img alt="Beverage" draggable="false" src={Beverage4} className="" />
      </motion.div>
    </div>
  );
};

export default FloatingItems;
