import './App.scss'
import { useState } from 'react';
import Cards from './components/Cards/Cards'
import Form from './components/Cards/Form/Form'

const App: React.FC = () => {
	const [nameText, setNameText] = useState<string>('');
	const [numberText, setNumberText] = useState<string>('');
	const [monthText, setMonthText] = useState<string>('');
	const [yearText, setYearText] = useState<string>('');
	const [CVCtext, setCVCText] = useState<string>('');

	const handleNameChange = (newNameValue: string) => {
		setNameText(newNameValue); 
	};
	const handleNumberChange = (newNumberValue: string) => {
		setNumberText(newNumberValue)
	};
	const handleMonthChange = (newMonthValue: string) => {
		setMonthText(newMonthValue); 
	};
	const handleYearChange = (newYearValue: string) => {
		setYearText(newYearValue); 
	};
	const handleCvcChange = (newCvcValue: string) => {
		setCVCText(newCvcValue); 
	};

	return (
		<div className="app">
			<Cards 
				onCardName={nameText}
				onCardNumber={numberText}
				onCardMonth={monthText}
				onCardYear={yearText}
				onCardCvc={CVCtext}	
			/>
			<Form 
				cardName={handleNameChange}
				cardNumber={handleNumberChange}
				month={handleMonthChange}
				year={handleYearChange}
				cvc={handleCvcChange}
			/>
		</div>
	)
}

export default App
