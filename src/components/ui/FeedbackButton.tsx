// Components/icon
import FeedbackIcon from "../icons/FeedbackIcon";

const FeedbackButton = () => {
  return (
    <button
      type="button"
      className="w-auto py-2 px-3 rounded-xl flex gap-x-2 items-center justify-center text-base text-white bg-black shadow scale-100 active:scale-105 transition-all duration-200 origin-center"
    >
      <FeedbackIcon />
      {/* <span>Feedback</span> */}
    </button>
  );
};

export default FeedbackButton;
