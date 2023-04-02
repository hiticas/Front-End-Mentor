import './ThankYou.scss'
import { FormItems } from '../../App'

type ThankYouProps = FormItems;

const ThankYou = ({ name, email, phone, plan }: ThankYouProps) => {
	return ( 
        <div className="thank_you">
            <h2>Trank You!</h2>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <p>{phone}</p>
            <h2>{plan}</h2>
        </div>
	);
};

	export default ThankYou;