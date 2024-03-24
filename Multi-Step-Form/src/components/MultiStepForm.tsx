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

  const renderActions = () => {
    return (
      !confirmed && (
        <div className="actions h-full flex justify-between items-center w-[90%] mx-auto">
          {step !== 1 && (
            <button
              className="h-[40px] font-bold text-slate-400 hover:text-slate-800"
              onClick={previousStep}
            >
              Go Back
            </button>
          )}
          {step !== 4 && (
            <button
              className="ml-[auto] font-bold h-[45px] w-[110px] bg-blue-950 rounded-md text-white hover:bg-blue-800"
              onClick={nextStep}
            >
              Next Step
            </button>
          )}
          {step === 4 && (
            <button
              className="ml-[auto] font-bold h-[45px] w-[110px] bg-indigo-700 rounded-md text-white hover:bg-indigo-600"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          )}
        </div>
      )
    );
  };

  const handleStepClick = (selectedStep: number) => {
    setStep(selectedStep);
  };

  console.log("formData", formData);

  return (
    <div className="multi-step-form sm:max-w-[940px] sm:p-5 sm:flex sm:rounded-lg">
      <div className="sidebar-wrapper  w-full sm:w-[275px]">
        <Sidebar currentStep={step} onStepClick={handleStepClick} />
      </div>
      <div className="content-wrapper relative bg-white w-[90%] mx-auto mt-[-90px] h-[500px] p-[30px] rounded-lg sm:w-[625px]">
        <div className="step">{renderStep()}</div>
        <div className="hidden sm:block">{renderActions()}</div>
      </div>
      <div className="absolute bottom-0 bg-white w-full h-[80px] sm:hidden">
        {renderActions()}
      </div>
    </div>
  );
};

export default MultiStepForm;
