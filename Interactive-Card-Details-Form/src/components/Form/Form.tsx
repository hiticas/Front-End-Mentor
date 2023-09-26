import './Form.scss'
import { useState } from 'react';
import icon_complete from './../../assets/images/icon-complete.svg';
import Input from '../Input/Input';

interface FormProps {
	cardName: (name: string) => void;
	cardNumber: (number: string) => void;
	month: (month: string) => void;
	year: (year: string) => void;
	cvc: (cvc: string) => void;
}

const Form: React.FC<FormProps> = ({
	cardName,
	cardNumber,
	month,
	year,
	cvc,
}) => {
	const [inputNameValue, setNameValue] = useState<string>('');
	const [inputCardNumberValue, setCardNumberValue] = useState<string>('');
	const [inputMonthValue, setMonthValue] = useState<string>('');
	const [inputYearValue, setYearValue] = useState<string>('');
	const [inputCvcValue, setCvcValue] = useState<string>('');

	const [isNameValid, setIsNameValid] = useState<boolean>(true);
	const [isCardNumberValid, setIsCardNumberValid] = useState<boolean>(true);
	const [isMonthValid, setIsMonthValid] = useState<boolean>(true);
	const [isYearValid, setIsYearValid] = useState<boolean>(true);
	const [isCvcValid, setIsCcvValid] = useState<boolean>(true);
	const [isFormValid, setIsFormValid] = useState<boolean>(false);


	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		inputNameValue === '' ? setIsNameValid(false) : setIsNameValid(true)
		inputCardNumberValue === '' || inputCardNumberValue.length < 16 ? setIsCardNumberValid(false) : setIsCardNumberValid(true)
		inputMonthValue === '' || inputMonthValue.length < 2 ? setIsMonthValid(false) : setIsMonthValid(true)
		inputYearValue === '' || inputYearValue.length < 2 ? setIsYearValid(false) : setIsYearValid(true)
		inputCvcValue === '' || inputCvcValue.length < 3 ? setIsCcvValid(false) : setIsCcvValid(true)

		if (inputNameValue && isCardNumberValid && isMonthValid && isYearValid && inputCvcValue) {
			setIsFormValid(true)

			console.log({
				name: inputNameValue,
				number: inputCardNumberValue,
				month: inputMonthValue,
				year: inputYearValue,
				ccv: inputCvcValue
			});
			e.currentTarget.reset();
		} else {
			setIsFormValid(false)
		}
	}

	const resetForm = () => {
		setNameValue('');
		setCardNumberValue('');
		setMonthValue('');
		setYearValue('');
		setCvcValue('');
		cardName('');
		cardNumber('');
		month('');
		year('');
		cvc('');
		setIsNameValid(true)
		setIsCardNumberValid(true)
		setIsMonthValid(true)
		setIsYearValid(true)
		setIsCcvValid(true)
		setIsFormValid(false)
	}

	function addWhiteSpaceEvery4Letters(inputString: string) {
		var result = '';
		for (var i = 0; i < inputString.length; i++) {
			result += inputString[i];
			if ((i + 1) % 4 === 0) {
				result += ' ';
			}
		}
		return result;
	};

	const placeholderFormattedCardNumber = addWhiteSpaceEvery4Letters('0000 0000 0000 0000')

	return (
		<div className='wrapper'>
			{isNameValid}{isCardNumberValid}{isMonthValid}{isYearValid}{isCvcValid}
			{!isFormValid  
				? <form className='form' onSubmit={handleSubmit}>
					<div className='form_row'>
						<Input
							label="CARDHOLDER NAME"
							value={inputNameValue}
							isValid={isNameValid}
							onChange={(newValue) => {
								setNameValue(newValue);
								cardName(newValue);
								setIsNameValid(true);
							}}
							placeholder="e.g. JANE APLEATISE"
							maxLength={20}
							error="Can't be blank"
						/>
					</div>
					<div className='form_row'>
						<Input
							label="CARD NUMBER"
							value={inputCardNumberValue}
							isValid={isCardNumberValid}
							onChange={(newValue) => {
								setCardNumberValue(newValue);
								cardNumber(newValue);
								setIsCardNumberValid(true);
							}}
							placeholder={placeholderFormattedCardNumber}
							maxLength={16}
							error="Wrong format, numbers only"
						/>
					</div>
					<div className='form_row column'>
						<div className='col'>
							<div className='label'>EXP.DATE (MM/YY)</div>
							<div className='date_inputs'>
								<Input
									value={inputMonthValue}
									isValid={isMonthValid}
									onChange={(newValue) => {
										setMonthValue(newValue);
										month(newValue);
										setIsMonthValid(true);
									}}
									placeholder="MM"
									maxLength={2}
								/>
								<Input
									value={inputYearValue}
									isValid={isYearValid}
									onChange={(newValue) => {
										setYearValue(newValue);
										year(newValue);
										setIsYearValid(true);
									}}
									placeholder="YY"
									maxLength={2}
								/>
							</div>
							{(!isMonthValid || !isYearValid) && <div className='error'>Can't be blank</div>}
						</div>
						<div className='col'>
							<Input
								label="CCV"
								value={inputCvcValue}
								isValid={isCvcValid}
								onChange={(newValue) => {
									setCvcValue(newValue);
									cvc(newValue);
									setIsCcvValid(true);
								}}
								placeholder='e.g. 482'
								maxLength={3}
								error="Can't be blank"
							/>
						</div>
					</div>
					<div className='form_row'>
						<button className='button' type='submit'>Confirm</button>
					</div>
				</form>
			
				: <div className='form_row finish'>
					<img src={icon_complete} />
					<div className='label title'>Thank You!</div>
					<div className='label subtitle'>We'he added your card details</div>
					<button className='button' type='button' onClick={resetForm}>Confirm</button>
				</div>
			}
		</div>
	)
}

export default Form