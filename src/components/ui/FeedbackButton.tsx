import React from "react";

// Components/icons
import FeedbackIcon from "../icons/FeedbackIcon";

const FeedbackButton = ({
  showFeedbackWidget,
  setShowFeedbackWidget,
}: {
  showFeedbackWidget: boolean;
  setShowFeedbackWidget: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative w-auto z-[9999999999999999999999999]">
      <button
        type="button"
        onClick={() => setShowFeedbackWidget(!showFeedbackWidget)}
        className="w-auto relative py-2 px-3 rounded-xl flex gap-1.5 items-center justify-center text-base text-white bg-black scale-100 active:scale-105 transition-all duration-200 origin-center"
      >
        <FeedbackIcon />
        <span>Feedback</span>
      </button>
    </div>
  );
};

export default FeedbackButton;
