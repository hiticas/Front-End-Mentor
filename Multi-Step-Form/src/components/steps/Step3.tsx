interface MyFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface Step3Props {
  formData: MyFormData;
  onFormChange: (fieldName: string, value: string) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, onFormChange }) => {
  return (
    <div>
      <h2 className="font-bolder">Step 3: Additional Details</h2>
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => onFormChange("phone", e.target.value)}
        placeholder="Enter your phone"
      />
    </div>
  );
};

export default Step3;
