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
      className="w-full relative rounded-lg text-black bg-white"
    >
      <div className="w-full flex justify-center flex-col items-center py-3 px-4">
        {!isSuccess && <FeedbackFormScreen setIsSuccess={setIsSuccess} />}
        {isSuccess && <SuccessScreen />}
      </div>
    </motion.div>
  );
};

export default SendFeedbackScreen;
