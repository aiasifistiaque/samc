import React from 'react';
import '../styles/style.css';
import { Style } from '../functions';
import { useStyle } from '../hooks';
import values from './values';

const FormContainerStructure = props => {
	const customClass = 'c-container-form';
	const formBorder = useStyle(props, values.formBorder);
	const formContainerWidth = useStyle(props, values.formContainerWidth);
	const styleClass = `${customClass} ${formBorder} ${formContainerWidth}`;
	return (
		<div className={styleClass} style={Style(props)}>
			{props.children}
		</div>
	);
};

const InputStructure = props => {
	const containerAlignment = useStyle(props, values.containerAlignment);
	const labelMargin = useStyle(props, values.labelMargin);
	const warningSpacing = useStyle(props, values.warningSpacing);
	const inputRounded = useStyle(props, values.inputRounded);
	const customClass = 'c-form';
	const styleClass = `${customClass} ${containerAlignment}`;
	//const type = props.type || 'text';
	return (
		<div className='c-form-container'>
			<label className={styleClass}>
				{props.label ? (
					<div className={`c-form-label ${labelMargin}`}>{props.label}</div>
				) : null}
				{props.type === 'textarea' ? (
					<textarea
						value={props.value || null}
						onChange={props.onChange || null}
						rows={props.rows || 4}
						placeholder={props.placeholder || '...'}
						className='c-input'
						style={Style(props)}
					/>
				) : (
					<input
						value={props.value || null}
						onChange={props.onChange || null}
						type={props.type || 'text'}
						placeholder={props.placeholder || '...'}
						className={`c-input ${inputRounded}`}
						style={Style(props)}
					/>
				)}
			</label>
			{props.warning ? (
				<div style={{ display: 'inherit' }}>
					<div className={warningSpacing} />
					<div className={`c-input-warning`}>{props.warning}</div>
				</div>
			) : null}
		</div>
	);
};

export const FormContainer = props => {
	return <FormContainerStructure {...props} />;
};

export const Input = props => {
	return <InputStructure type={props.type || 'text'} {...props} />;
};

export const TextInput = props => {
	return <InputStructure type='text' {...props} />;
};

export const PasswordInput = props => {
	return <InputStructure type='password' {...props} />;
};

export const TextArea = props => {
	return <InputStructure type='textarea' {...props} />;
};
