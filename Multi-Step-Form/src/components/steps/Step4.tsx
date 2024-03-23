interface MyFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

interface Step4Props {
  formData: MyFormData;
  onFormChange: (fieldName: string, value: string) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, onFormChange }) => {
  return (
    <div>
      <h2 className="font-bolder">Step 4: Review and Submit</h2>
      <input
        type="text"
        value={formData.country}
        onChange={(e) => onFormChange("country", e.target.value)}
        placeholder="Enter your country"
      />
    </div>
  );
};

export default Step4;
