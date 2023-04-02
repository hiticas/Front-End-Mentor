import './PickAddOns.scss'
import { FormItems } from '../../App'
import planOptions from '../../data/planOptions.json'

type PickAddOnsProps = FormItems & {
	updateForm: (item: Partial<FormItems>) => void;
};

const PickAddOns = ({planLength, hasOnlineServices, hasLargerStorage, hasCustomizableProfile, updateForm}: PickAddOnsProps) => {
	return (
		<div className="pick_add_ons">
			<div>PickAddOns</div>
			<div className='add_ons'>
				<div className='add_on'>
					<input 
						type="checkbox"
						name="hasOnlineServices" 
						id='hasOnlineServices'
						checked={hasOnlineServices}
						onChange={(e) => updateForm({ hasOnlineServices: e.target.checked })} 
					/>
					<label htmlFor='hasOnlineServices'>
						{/* <div>BOX</div> */}
						<h3>Online Services</h3>
						<p>+${planOptions.onlineServices.monthly}/mo</p>
					</label>
				</div>
				<div className='add_on'>
					<input 
						type="checkbox"
						name="hasLargerStorage" 
						id='hasLargerStorage'
						checked={hasLargerStorage}
						onChange={(e) => updateForm({ hasLargerStorage: e.target.checked })} 
					/>
					<label htmlFor='hasLargerStorage'>
						{/* <div>BOX</div> */}
						<h3>Larger Storage</h3>
						<p>+${planOptions.largerStorage.monthly}/mo</p>
					</label>
				</div>
				<div className='add_on'>
					<input 
						type="checkbox"
						name="hasCustomizableProfile" 
						id='hasCustomizableProfile'
						checked={hasCustomizableProfile}
						onChange={(e) => updateForm({ hasCustomizableProfile: e.target.checked })} 
					/>
					<label htmlFor='hasCustomizableProfile'>
						{/* <div>BOX</div> */}
						<h3>Customizable Profile</h3>
						<p>+${planOptions.customizableProfile.monthly}/mo</p>
					</label>
				</div>
			</div>
		</div>
	)
}

export default PickAddOns