import React from "react";

interface MyFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface Step1Props {
  formData: MyFormData;
  onFormChange: (fieldName: string, value: string) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, onFormChange }) => {
  return (
    <div>
      <h2 className="font-bolder">Step 1: Personal Information</h2>
      <input
        type="text"
        className="border-2 border-green-600"
        value={formData.name}
        onChange={(e) => onFormChange("name", e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Step1;
