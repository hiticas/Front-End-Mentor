import './Cards.scss'
import { useState, useEffect } from 'react';
import card_logo from './../../assets/images/card-logo.svg';

interface CardsProps {
	onCardName: string;
	onCardNumber: string;
	onCardMonth: string;
	onCardYear: string;
	onCardCvc: string;
}

const Cards: React.FC<CardsProps> = ({ 
	onCardName,
	onCardNumber,
	onCardMonth,
	onCardYear,
	onCardCvc,
}) => {
	const [displayCardName, setDisplayCardName] = useState<string>('');
	const [displayCardNumber, setDisplayCardNumber] = useState<string>('');
	const [displayCardMonth, setDisplayCardMonth] = useState<string>('');
	const [displayCardYear, setDisplayCardYear] = useState<string>('');
	const [displayCVC, setDisplayCVC] = useState<string>('');
	
	useEffect(() => {
		setDisplayCardName(onCardName);
		setDisplayCardNumber(onCardNumber);
		setDisplayCardMonth(onCardMonth);
		setDisplayCardYear(onCardYear);
		setDisplayCVC(onCardCvc);
	}, [onCardName, onCardNumber, onCardMonth, onCardYear, onCardCvc]);

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

	const formattedCardNumber = addWhiteSpaceEvery4Letters(displayCardNumber)

	return (
		<div className='cards'>
			<div className='cardA'>
				<img className='logo' src={card_logo}/>
				{displayCardNumber === '' ?
					<div className='code'>0000 0000 0000 0000</div>
					:
					<div className='code'>{formattedCardNumber}</div>
				}
				<div className='details'>
					{displayCardName === '' ?
						<div className='name'>JANE APPLESEED</div>
						:
						<div className='name'>{displayCardName}</div>
					}
					<div className='date'>
						{displayCardMonth === '' ?
							<span className='name'>00</span>
							:
							<span className='name'>{displayCardMonth}</span>
						}/{displayCardYear === '' ?
						<span className='name'>00</span>
						:
						<span className='name'>{displayCardYear}</span>
						}
					</div>
				</div>
			</div>
			<div className='cardB'>
				{displayCVC === '' ? <div className='ccv'>482</div> : <div className='ccv'>{displayCVC}</div>}
			</div>
		</div>
	)
}

export default Cards