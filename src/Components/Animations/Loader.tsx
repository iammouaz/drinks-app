import Beverage5 from "Assets/Beverage5.png";
import { motion } from "framer-motion";

const Loader: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center gap-10 items-center text-white text-2xl py-20">
      <motion.div
        animate={{
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
      >
        <img src={Beverage5} className="w-20" alt="Beverage" />
      </motion.div>
      <span>Loading..</span>
    </div>
  );
};

export default Loader;
