import './PersonalInfo.scss'
import { FormItems } from '../../App'

type PersonalInfoProps = FormItems & {
	updateForm: (item: Partial<FormItems>) => void;
	nameError: string;
	emailError: string;
	phoneError: string;
};

const PersonalInfo = ({name, email, phone, updateForm, nameError, emailError, phoneError}: PersonalInfoProps) => {
	return (
		<div className="your_info">
			<div>PersonalInfo</div>
			<div className="personal_data">
				<label htmlFor="name">Name</label>
				<input 
					type="text" 
					id="name" 
					value={name} 
					onChange={(e) => updateForm({ name: e.target.value })} 
					name="name" 
					autoFocus
					autoComplete="name" 
					placeholder="e.g. Stephen King" 
				/>
				{nameError && <h2>{nameError}</h2>}
				<label htmlFor="email">Email</label>
				<input 
					type="text" 
					id="email" 
					value={email} 
					onChange={(e) => updateForm({ email: e.target.value })} 
					name="email" 
					autoComplete="email" 
					placeholder="e.g. stephenking@email.com" 
				/>
				{emailError && <h2>{emailError}</h2>}
				<label htmlFor="phone">Phone</label>
				<input 
					type="tel" 
					id="phone" 
					value={phone} 
					onChange={(e) => updateForm({ phone: e.target.value })} 
					name="phone" 
					autoComplete="phone" 
					placeholder="e.g. 1234 567 890" 
				/>
				{phoneError && <h2>{phoneError}</h2>}
			</div>
		</div>
	)
}

export default PersonalInfo