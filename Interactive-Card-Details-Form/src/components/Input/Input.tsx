import './Input.scss'

interface InputProps {
	label?: string;
	value: string;
	isValid: boolean;
	onChange: (value: string) => void;
	placeholder?: string;
	maxLength?: number;
	error?: string;
}

const Input: React.FC<InputProps> = ({
	label,
	value,
	isValid,
	onChange,
	placeholder,
	maxLength,
	error,
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;

		if (maxLength && newValue.length > maxLength) {
			return;
		}

		onChange(newValue);
	};

	return (
		<div className="input_component">
			{label && <div className="label">{label}</div>}
			<input
				className={!isValid ? 'input error' : 'input'}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
			/>
			{!isValid && error && <div className="error">{error}</div>}
		</div>
	);
};

export default Input;
