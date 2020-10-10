import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: props.animDelay || 0
			}}
      className="bg-gray-900 py-3 px-4 rounded-lg"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500 font-medium">{props.title}</span>
        <span className="text-2xl text-white">{props.value}</span>
      </div>
      {props.children && props.children}
    </motion.div>
  );
};

export default Card;
