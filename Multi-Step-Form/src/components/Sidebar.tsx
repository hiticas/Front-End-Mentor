import React from "react";

interface SidebarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep, onStepClick }) => {
  return (
    <div>
      <h3 className="font-bolder">Steps</h3>
      <div className="steps">
        <div
          onClick={() => onStepClick(1)}
          className={currentStep === 1 ? "active" : ""}
        >
          Personal Information
        </div>
        <div
          onClick={() => onStepClick(2)}
          className={currentStep === 2 ? "active" : ""}
        >
          Contact Information
        </div>
        <div
          onClick={() => onStepClick(3)}
          className={currentStep === 3 ? "active" : ""}
        >
          Additional Details
        </div>
        <div
          onClick={() => onStepClick(4)}
          className={currentStep === 4 ? "active" : ""}
        >
          Review and Submit
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
