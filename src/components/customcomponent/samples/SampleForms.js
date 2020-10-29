import React, { useState } from 'react';
import {
	Container,
	Content,
	Input,
	TextInput,
	PasswordInput,
	FormContainer,
	TextArea,
	Button,
} from '../index';

export default function SampleForms() {
	const [text, setText] = useState();
	const [password, setPassword] = useState();
	const [password2, setPassword2] = useState();

	return (
		<Container center>
			<FormContainer>
				<Content center>forms inside container</Content>
				<TextInput
					label='Text label'
					warning='We will not share your details'
					placeholder='enter text'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<PasswordInput
					placeholder='enter password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</FormContainer>
			<FormContainer bordered>
				<Content>Form Container Bordered</Content>
				<TextInput
					rounded
					label='Text label'
					warning='We will not share your details'
					placeholder='enter text'
				/>
				<TextArea label='Text area' placeholder='enter text' />
			</FormContainer>
			<FormContainer bordered>
				<Content>Inline labels</Content>
				<Input inline label='Email' type='text' placeholder='enter email' />
				<Input
					inline
					label='Password'
					type='password'
					warning='Password must be 10 letters long'
					placeholder='enter password'
				/>
			</FormContainer>
			<FormContainer small bordered>
				<Content>Form Container Small</Content>
				<TextInput
					label='Text label'
					warning='We will not share your details'
					placeholder='enter text'
				/>
				<TextInput label='Text label' placeholder='enter text' />
				<Button rounded danger>
					Submit
				</Button>
			</FormContainer>
			<FormContainer bordered>
				<Content>Form Container regular</Content>
				<TextInput
					label='Text label'
					warning='We will not share your details'
					placeholder='enter text'
				/>
				<TextInput label='Text label' placeholder='enter text' />
				<Button rounded block slate>
					Submit
				</Button>
			</FormContainer>
			<FormContainer
				bordered
				block
				style={{
					borderColor: 'tomato',
					backgroundColor: 'whitesmoke',
				}}>
				<Content>Form Container block</Content>
				<TextInput
					label='Text label'
					warning='We will not share your details'
					placeholder='enter text'
				/>
				<TextInput label='Text label' placeholder='enter text' />
				<Button rounded block blue>
					Submit
				</Button>
			</FormContainer>
			<Content>Name is: {text}</Content>
			<Content>password is: {password}</Content>
			<Content>password is: {password2}</Content>
		</Container>
	);
}
