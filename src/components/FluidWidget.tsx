import { useState } from "react";

// Framer Motion
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

// TailwindCSS Merger
import { cn } from "../cn";

// Components/ui
import FeedbackButton from "../components/ui/FeedbackButton";

// Feedback Screens
import SendFeedbackScreen from "../screen";

const FluidWidget = () => {
  const [showFeedbackWidget, setShowFeedbackWidget] = useState(false);

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <div
        style={{ filter: "url(#liquidify)" }}
        className="w-auto flex flex-col justify-center items-end fixed bottom-6 right-6"
      >
        <div className="w-full flex justify-center items-center">
          <motion.div
            drag={showFeedbackWidget ? false : true}
            dragConstraints={
              !showFeedbackWidget && { left: 0, right: 0, top: 0, bottom: 0 }
            }
            initial={{ x: 0, y: 0 }}
            animate={
              showFeedbackWidget
                ? {
                    x: "-30%",
                    y: "-58%",
                    width: "320px",
                    height: "400px",
                    borderRadius: "8px",
                    backgroundColor: "black",
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 10,
                    },
                  }
                : {
                    x: 0,
                    y: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "100%",
                    backgroundColor: "black",
                    transition: { type: "spring", stiffness: 500, damping: 10 },
                  }
            }
            id="widget_shadow"
            className={cn("absolute -z-10 overflow-y-scroll no-scrollbar")}
          >
            <AnimatePresence>
              {showFeedbackWidget && <SendFeedbackScreen />}
            </AnimatePresence>
          </motion.div>
        </div>
        <FeedbackButton
          showFeedbackWidget={showFeedbackWidget}
          setShowFeedbackWidget={setShowFeedbackWidget}
        />
      </div>

      <svg>
        <filter id="liquidify">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="BLEND" />
          <feColorMatrix
            in="BLEND"
            mode="matrix"
            values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
           0 0 0 18 -8
          "
            result="BLUR"
          />
          <feBlend in="SourceGraphic" in2="BLUR" />
        </filter>
      </svg>
    </MotionConfig>
  );
};

export default FluidWidget;
