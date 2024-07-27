import React from "react";

interface PricingToggleProps {
  onToggle: () => void;
  isMonthly: boolean;
}

const PricingToggle: React.FC<PricingToggleProps> = ({
  onToggle,
  isMonthly,
}) => {
  return (
    <div className="toggle_wrapper">
      <span className="mr-6 text-gray-400">Annually</span>
      <button className="toggle_button" onClick={() => onToggle()}>
        <div
          className={`toggle_circle ${
            !isMonthly ? "translate-x-1" : "translate-x-[33px]"
          }`}
        ></div>
      </button>
      <span className="ml-6 text-gray-400">Monthly</span>
    </div>
  );
};

export default PricingToggle;
