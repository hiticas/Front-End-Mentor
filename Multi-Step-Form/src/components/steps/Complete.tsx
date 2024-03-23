import React from "react";

interface MyFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface CompleteProps {
  formData: MyFormData;
}

const Complete: React.FC<CompleteProps> = ({ formData }) => {
  return (
    <div>
      <h1 className="font-bolder">Complete</h1>
      <h3>{formData.name}</h3>
      <h3>{formData.email}</h3>
      <h3>{formData.phone}</h3>
      <h3>{formData.country}</h3>
    </div>
  );
};

export default Complete;
