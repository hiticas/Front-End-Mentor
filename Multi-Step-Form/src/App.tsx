import { FormEvent, useState } from "react";
import { saveAs } from 'file-saver';

import './App.scss'
import './index.css'

import useMultiForm from './hooks/useMultiForm'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import SelectPlan from './components/SelectPlan/SelectPlan'
import PickAddOns from './components/PickAddOns/PickAddOns'
import Summary from './components/Summary/Summary'

export type FormItems = {
	name: string;
	email: string;
	phone: string;
	plan: "arcade" | "advanced" | "pro";
	planLength: boolean;
	hasOnlineServices: boolean;
	hasLargerStorage: boolean;
	hasCustomizableProfile: boolean;
}

const initialValues: FormItems = {
	name: '',
	email: '',
	phone: '',
	plan: 'arcade',
	planLength: false,
	hasOnlineServices: false,
	hasLargerStorage: false,
	hasCustomizableProfile: false,
}

function App() {
	const [formData, setFormData] = useState(initialValues);
	const [finish, setFinish] = useState(false); 
	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [phoneError, setPhoneError] = useState('');

	const updateForm = (fieldsToUpdate: Partial<FormItems>) => {
		return setFormData((prev) => ({ ...formData, ...fieldsToUpdate }));
	}

	const {
		currentIndex,
		goBackwards, 
		goForwards, 
		goToSection,
		isFirstStep, 
		isLastStep,
	} = useMultiForm(4);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		checkInfoFields();
		if (formData.name === '' || formData.email === '' || formData.phone === '') return;
		
		goForwards();

		if (isLastStep) setFinish(true);
		if (isLastStep) {
			console.log(formData);

			/////// Convert the form data to JSON format
			// const jsonData = JSON.stringify(formData);

			/////// Create a new blob object with the JSON data
			// const blob = new Blob([jsonData], { type: 'application/json' });

			/////// Use the FileSaver library to save the blob object to a file
			// saveAs(blob, 'form_data.json');
		}
	};

	const handleChangeSection = (section: number) => {
		checkInfoFields();
		if (formData.name === '' || formData.email === '' || formData.phone === '') return;

		goToSection(section);
	}

	const checkInfoFields = () => {
		if (formData.name === '') {
			setNameError('Name is required');
		} else {
			setNameError('');
		}

		if (formData.email === '') {
			setEmailError('Email is required');
		} else {
			setEmailError('');
		}

		if (formData.phone === '') {
			setPhoneError('Phone is required');
		} else {
			setPhoneError('');
		}
	}

	return (
		<div className="app">
			{!finish && 
				<div className="tabs">
					<div className={`tab ${currentIndex === 0 ? "active" : ""}`} onClick={() => handleChangeSection(0)}>1</div>
					<div className={`tab ${currentIndex === 1 ? "active" : ""}`} onClick={() => handleChangeSection(1)}>2</div>
					<div className={`tab ${currentIndex === 2 ? "active" : ""}`} onClick={() => handleChangeSection(2)}>3</div>
					<div className={`tab ${currentIndex === 3 ? "active" : ""}`} onClick={() => handleChangeSection(3)}>4</div>
				</div>
			}
			<form onSubmit={handleSubmit}>
				{!finish && 
					<div>
						{currentIndex === 0 && <PersonalInfo {...formData} updateForm={updateForm} nameError={nameError} emailError={emailError} phoneError={phoneError} />}
						{currentIndex === 1 && <SelectPlan {...formData} updateForm={updateForm}/>}
						{currentIndex === 2 && <PickAddOns {...formData} updateForm={updateForm}/>}
						{currentIndex === 3 && <Summary goToSection={goToSection} {...formData} updateForm={updateForm} />}
						{!isFirstStep && (<button type="button" onClick={goBackwards}>Go back</button>)}
						<button type="submit">{isLastStep ? "Confirm" : "Next Step"}</button>
					</div>
				}
				{finish && 
					<div>
						<h2>Trank You!</h2>
						<h1>{formData.name}</h1>
						<h3>{formData.email}</h3>
						<p>{formData.phone}</p>
						<h2>{formData.plan}</h2>
					</div>
				}
			</form>
		</div>
	)
}

export default App
