interface MyFormData {
  onlineServices: boolean;
  largeStorage: boolean;
  customizableProfile: boolean;
}

interface Step3Props {
  formData: MyFormData;
  onFormChange: (fieldName: keyof MyFormData, value: boolean) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, onFormChange }) => {
  const handleCheckboxChange = (fieldName: keyof MyFormData) => {
    onFormChange(fieldName, !formData[fieldName]);
  };

  return (
    <div>
      <h2 className="font-bolder">Step 3: Additional Details</h2>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={formData.onlineServices}
            onChange={() => handleCheckboxChange("onlineServices")}
          />
          Online Services
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.largeStorage}
            onChange={() => handleCheckboxChange("largeStorage")}
          />
          Large Storage
        </label>
        <label>
          <input
            type="checkbox"
            checked={formData.customizableProfile}
            onChange={() => handleCheckboxChange("customizableProfile")}
          />
          Customizable Profile
        </label>
      </div>
    </div>
  );
};

export default Step3;
