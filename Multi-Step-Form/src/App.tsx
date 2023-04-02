import { FormEvent, useState } from "react";
// import { saveAs } from 'file-saver';

import './App.scss'
import './index.css'

import useMultiForm from './hooks/useMultiForm'

import Tab from './components/Tab/Tab'
import Section from './components/Section/Section'

import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import SelectPlan from './components/SelectPlan/SelectPlan'
import PickAddOns from './components/PickAddOns/PickAddOns'
import Summary from './components/Summary/Summary'
import ThankYou from './components/ThankYou/ThankYou'

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

	const sections = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
	const sectionSubtitles = [
		"Please provide your name, email address, and phone number.",
		"You have the option of monthly or yearly billing.",
		"Add-ons help enhance your gaming experience.",
		"Double-check everything looks OK before confirming.",
	];

	return (
		<div className="app">
			{!finish && 
				<>
					<div className="tabs">
						{sections.map((section, index) => (
							<Tab
								key={index}
								section={index + 1}
								label={section}
								className={`tab ${currentIndex === index ? "active" : ""}`}
								onClick={() => handleChangeSection(index)}
							/>
						))}
					</div>
					<form className="form" onSubmit={handleSubmit}>
						{sections.map((sectionTitle, index) => {
							let sectionComponent;
							if (index === 0) {
								sectionComponent = (
									<PersonalInfo {...formData} updateForm={updateForm} nameError={nameError} emailError={emailError} phoneError={phoneError}/>
								);
							} else if (index === 1) {
								sectionComponent = (
									<SelectPlan {...formData} updateForm={updateForm} />
								);
							} else if (index === 2) {
								sectionComponent = (
									<PickAddOns {...formData} updateForm={updateForm} />
								);
							} else if (index === 3) {
								sectionComponent = (
									<Summary
										goToSection={goToSection}
										{...formData}
										updateForm={updateForm}
									/>
								);
							}
							return (
								currentIndex === index && 
								<Section
									key={index}
									title={sectionTitle}
									subTitle={sectionSubtitles[index]}
									>
									{sectionComponent}
								</Section>
							);
						})}

						<div className="btn_actions">
							{!isFirstStep && (<button type="button" onClick={goBackwards}>Go back</button>)}
							<button type="submit">{isLastStep ? "Confirm" : "Next Step"}</button>
						</div>
					</form>
				</>
			}
			{finish && <ThankYou {...formData}/>}
		</div>
	)
}

export default App
