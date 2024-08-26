import { useState } from "react";

// Framer Motion
import { motion, useTransform, useMotionValue } from "framer-motion";

// Screens
import SuccessScreen from "./Success";
import FeedbackFormScreen from "./FeedbackFormScreen";

const SendFeedbackScreen = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const showFinalSuccessScreen = () => {
    setIsSuccess(!!isSuccess);
  };

  console.log(showFinalSuccessScreen);

  const x = useMotionValue(100);
  const backgroundColor = useTransform(x, [0, 100], ["#f00", "#fff"]);

  return (
    <motion.div
      style={{ backgroundColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relativez-[9999999999] w-[270px] max-h-[350px] bg-white text-black shadow-xl border border-gray-100 mb-6 p-3 rounded-lg"
    >
      <div className="w-full h-full">
        {!isSuccess && <FeedbackFormScreen />}
        {isSuccess && <SuccessScreen />}
      </div>
    </motion.div>
  );
};

export default SendFeedbackScreen;
