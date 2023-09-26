import './App.scss'
import card_logo from './assets/images/card-logo.svg';

const App = () => {
	return (
		<div className="app">
			<div className='cards'>
				<div className='cardA'>
					<img className='logo' src={card_logo}/>
					<div className='code'>0000 0000 0000 0000</div>
					<div className='details'>
						<div className='name'>JANE APLEATISE</div>
						<div className='date'>00/00</div>
					</div>
				</div>
				<div className='cardB'>
					<div className='ccv'>480</div>
				</div>
			</div>
			<div className='form'>
				<div className='form_row'>
					<div className='label'>CARDHOLDER NAME</div>
					<input className='input' placeholder='e.g. JANE APLEATISE'/>
				</div>
				<div className='form_row'>
					<div className='label'>CARD NUMBER</div>
					<input className='input' placeholder='e.g. 0000 0000 0000 0000'/>
				</div>
				<div className='form_row column'>
					<div className='col'>
						<div className='label'>EXP.DATE (MM/YY)</div>
						<div className='inputs'>
							<input className='input' placeholder='MM'/>
							<input className='input' placeholder='YY'/>
						</div>
					</div>
					<div className='col'>
						<div className='label'>CCV</div>
						<input className='input date' placeholder='e.g. 123'/>
					</div>
				</div>
				<div className='form_row'>
					<button className='button'>Confirm</button>
				</div>
			</div>
		</div>
	)
}

export default App
