import { useState } from "react";

// Framer Motion
import { motion } from "framer-motion";

// Screens
import SuccessScreen from "./Success";
import FeedbackFormScreen from "./FeedbackFormScreen";

const SendFeedbackScreen = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: -2 } }}
      className="w-full relative rounded-[4px] text-black bg-white flex justify-center flex-col items-center py-3 px-4"
    >
      {!isSuccess && <FeedbackFormScreen setIsSuccess={setIsSuccess} />}
      {isSuccess && <SuccessScreen />}
    </motion.div>
  );
};

export default SendFeedbackScreen;
