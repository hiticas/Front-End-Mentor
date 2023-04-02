import './SelectPlan.scss'
import { FormItems } from '../../App'
import planOptions from '../../data/planOptions.json'

type SelectPlanProps = FormItems & {
	updateForm: (item: Partial<FormItems>) => void;
};

const SelectPlan = ({ plan, planLength, updateForm}: SelectPlanProps) => {
	return (
		<div className="select_plan">
			<div className='plans'>
				<div className='plan'>
					<label htmlFor="arcade">
						<p>Arcade</p>
						<p>${!planLength ? planOptions.arcade.monthly : planOptions.arcade.yearly}/{!planLength ? "mo" : "yr"}</p>
					</label>
					<input 
						type="radio" 
						id="arcade" 
						name="plan" 
						checked={plan === 'arcade'}
						onChange={(e) => updateForm({ plan: "arcade" })} 
					/>
					{planLength && <p>2 months free</p>}
				</div>
				<div className='plan'>
					<label htmlFor="advanced">
						<p>Advanced</p>
						<p>${!planLength ? planOptions.advanced.monthly : planOptions.advanced.yearly}/{!planLength ? "mo" : "yr"}</p>
					</label>
					<input 
						type="radio" 
						id="advanced" 
						name="plan" 
						checked={plan === 'advanced'}
						onChange={(e) => updateForm({ plan: "advanced"  })} 	 
					/>
					{planLength && <p>2 months free</p>}
				</div>
				<div className='plan'>
					<label htmlFor="pro">
						<p>Pro</p>
						<p>${!planLength ? planOptions.pro.monthly : planOptions.pro.yearly}/{!planLength ? "mo" : "yr"}</p>
					</label>
					<input 
						type="radio" 
						id="pro" 
						name="plan" 
						checked={plan === 'pro'}
						onChange={(e) => updateForm({ plan: "pro"  })} 	 
					/>
					{planLength && <p>2 months free</p>}
				</div>
			</div>
			<div>
				<label>
					<span>Monthly</span>
					<input 
						type="checkbox" 
						name='planLength' 
						checked={planLength} 
						onChange={(e) => updateForm({ planLength: e.target.checked })}
					/>
					<span>Yearly</span>
				</label>
			</div>
		</div>
	)
}

export default SelectPlan