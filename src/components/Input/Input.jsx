import "./input.css";

const Input = ({ id, type, label }) => {
	console.log('label: ', label);
	return (
		<div className="field">
			<input
				id={id}
				type={type}
				placeholder={label}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	)
};

export default Input;