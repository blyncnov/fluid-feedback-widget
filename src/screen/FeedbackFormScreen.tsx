import React, { useState } from "react";
import axios from "axios";

const FeedbackFormScreen = ({
  setIsSuccess,
}: {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email_address: "",
    Feedback: "",
  });

  const onContactRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ENABLE LOADING
    setLoading(true);

    axios
      .post("/api/send", formData)
      .then((response) => {
        if (response.status === 200) {
          // CLEAR FORM FIELDS
          (e.target as HTMLFormElement).reset();

          // SHOW SUCCESS SCREEN
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // DISABLE LOADING
        setLoading(false);
      });
  };

  return (
    <section className="w-full h-full">
      <div className="w-full flex flex-col gap-1">
        <h4 className="text-xl font-semibold text-tertiary">
          💭 Fluid Feedback Widget
        </h4>

        <p className="text-sm opacity-90">
          Please take a moment to share your honest thoughts and help us
          improve.
        </p>
      </div>

      <div className="w-full max-w-full grid grid-cols-1 gap-3">
        <div className="w-full min-w-full max-w-full">
          <form
            className="contact-sales-form w-full py-4 flex flex-col gap-4 rounded-xl"
            onSubmit={onContactRequest}
          >
            <div className="space-y-1 w-full">
              <label
                htmlFor="sender_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="sender_name"
                  id="sender_name"
                  autoComplete="sender_name"
                  autoFocus
                  className="block w-full rounded-lg border p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                  required
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      Name: e.target.value,
                    }));
                  }}
                  placeholder="e.g Taiwo Boluwatife"
                />
              </div>
            </div>

            <div className="space-y-1 w-full">
              <label
                htmlFor="sender_email_address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="sender_email_address"
                  id="sender_email_address"
                  autoComplete="current-sender_email_address"
                  className="block w-full rounded-lg border p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                  required
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      Email_address: e.target.value,
                    }));
                  }}
                  placeholder="e.g info@jeremytechie.com"
                />
              </div>
            </div>

            <div className="space-y-1 w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Feedback Message
              </label>
              <div className="relative">
                <textarea
                  name="feedback"
                  id="feedback"
                  autoComplete="current-feedback"
                  className="block w-full min-h-[80px] rounded-lg border p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                  required
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      Feedback: e.target.value,
                    }));
                  }}
                  placeholder="Hey Jeremytechie, i've got something to share )::"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="flex gap-x-3 items-center justify-center text-base text-white border bg-black border-white/10 py-2 px-4 rounded-lg shadow"
              >
                {loading ? (
                  <div className="flex gap-x-3 items-center">
                    <p>Sending</p>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  "Send Feedback"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackFormScreen;
