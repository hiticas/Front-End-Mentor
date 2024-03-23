import React from "react";

interface MyFormData {
  plan: string;
  subscription: string;
  onlineServices: boolean;
  largeStorage: boolean;
  customizableProfile: boolean;
}

interface CompleteProps {
  formData: MyFormData;
  onStepClick: (step: number) => void;
}

const Complete: React.FC<CompleteProps> = ({ formData, onStepClick }) => {
  return (
    <div>
      <h1 className="font-bolder">Complete</h1>
      <div className="">
        <div className="flex">
          <h3>{formData.plan}</h3>
          <h3>({formData.subscription})</h3>
        </div>
        <button className="border-2" onClick={() => onStepClick(2)}>
          Change
        </button>
      </div>
      <ul className="list-disc">
        {formData.onlineServices && (
          <li>
            <h3>Online Services</h3>
          </li>
        )}
        {formData.largeStorage && (
          <li>
            <h3>Large Storage</h3>
          </li>
        )}
        {formData.customizableProfile && (
          <li>
            <h3>Customizable Profile</h3>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Complete;
