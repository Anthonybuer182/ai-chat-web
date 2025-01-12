import React from "react";

export default function Steps ({steps, currentStep}) {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex items-center">
            {/* Step Indicator */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                isCompleted
                  ? "bg-green-500 border-green-500 text-white"
                  : isActive
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "bg-gray-200 border-gray-300 text-gray-500"
              }`}
            >
              {isCompleted ? "✔" : index + 1}
            </div>

            {/* Step Label */}
            <div
              className={`ml-2 text-sm ${
                isCompleted || isActive ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step}
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 ${
                  isCompleted ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
