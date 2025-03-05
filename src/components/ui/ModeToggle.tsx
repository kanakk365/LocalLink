import React from "react";

interface ModeToggleProps {
  isDeliveryMode: boolean;
  onToggle: () => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ isDeliveryMode, onToggle }) => {
  return (
    <div className="bg-gray-800 rounded-full shadow-md p-1 flex items-center">
      <button
        className={`py-1 px-3 rounded-full transition-all duration-200 flex items-center justify-center text-sm ${
          isDeliveryMode
            ? "bg-white text-black"
            : "bg-transparent text-gray-300 hover:text-white"
        }`}
        onClick={isDeliveryMode ? undefined : onToggle}
        aria-label="Switch to delivery mode"
      >
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        Deliver
      </button>
      <button
        className={`py-1 px-3 rounded-full transition-all duration-200 flex items-center justify-center text-sm ${
          !isDeliveryMode
            ? "bg-white text-black"
            : "bg-transparent text-gray-300 hover:text-white"
        }`}
        onClick={!isDeliveryMode ? undefined : onToggle}
        aria-label="Switch to order mode"
      >
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        Order
      </button>
    </div>
  );
};

export default ModeToggle;
