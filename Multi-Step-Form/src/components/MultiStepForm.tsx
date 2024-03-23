import React, { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Sidebar from "./Sidebar";
import Complete from "./steps/Complete";

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  subscription: string;
  onlineServices: boolean;
  largeStorage: boolean;
  customizableProfile: boolean;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    subscription: "monthly",
    onlineServices: false,
    largeStorage: false,
    customizableProfile: false,
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleFormChange = (fieldName: string, value: string | boolean) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const renderStep = () => {
    if (confirmed) {
      return <Complete formData={formData} />;
    }

    switch (step) {
      case 1:
        return <Step1 formData={formData} onFormChange={handleFormChange} />;
      case 2:
        return <Step2 formData={formData} onFormChange={handleFormChange} />;
      case 3:
        return <Step3 formData={formData} onFormChange={handleFormChange} />;
      case 4:
        return <Step4 formData={formData} onStepClick={handleStepClick} />;
      default:
        return null;
    }
  };

  const handleStepClick = (selectedStep: number) => {
    setStep(selectedStep);
  };

  console.log("formData", formData);

  return (
    <div className="multi-step-form w-full flex ">
      <div className="sidebar-wrapper w-[30%]">
        <Sidebar currentStep={step} onStepClick={handleStepClick} />
      </div>
      <div className="content-wrapper w-[70%]">
        <div className="step">{renderStep()}</div>
        {!confirmed && (
          <div className="actions">
            {step !== 1 && (
              <button className="border-2" onClick={previousStep}>
                Previous
              </button>
            )}
            {step !== 4 && (
              <button className="border-2" onClick={nextStep}>
                Next
              </button>
            )}
            {step === 4 && (
              <button className="border-2 bg-lime-500" onClick={handleConfirm}>
                Complete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
