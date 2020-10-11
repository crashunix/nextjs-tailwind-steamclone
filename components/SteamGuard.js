import { motion } from "framer-motion";
import react, { useState, useEffect } from "react";

const SteamGuard = () => {
  const makeGuardCode = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [guardCode, setGuardCode] = useState(makeGuardCode(5));
  const [guardSecs, setGuardSecs] = useState(20);

  useEffect(() => {
    if (guardSecs > 0) {
      setTimeout(() => setGuardSecs(guardSecs - 1), 1000);
    } else if (guardSecs == 0) {
      setGuardCode(makeGuardCode(5));
      setGuardSecs(20);
    }
  });

  return (
    <div className="px-4 py-4">
      <p className="text-white font-normal mb-4">Steam Guard</p>
      <div className="flex justify-between items-center">
        <span
          className={`${
            guardSecs < 5 ? "text-red-500" : "text-white"
          } text-5xl font-medium tracking-widest leading-4`}
        >
          {guardCode}
        </span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-settings text-gray-600"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
      <div className="pt-6 mt-1">
        <div className="bg-gray-900 rounded-sm">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${guardSecs * 5}%` }}
            transition={{
              stiffness: 260,
              damping: 20,
            }}
            className={`${
              guardSecs < 5 ? "bg-red-500" : "bg-blue-400"
            } h-1 w-full rounded-sm`}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SteamGuard;
