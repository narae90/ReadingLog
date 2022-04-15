import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import styled from "styled-components";


const ContainerLogin = styled.div`
	text-align: center;
	color: rgb(80, 79, 79);
	width: 50%;
	align-items: center;
	margin: auto;
	margin-top: 80px;
	header{
		font-size: 1.3rem;
		font-weight: 700;
		margin: 0 auto 60px auto;
		position: relative;
		height: 25px;
		width: 250px;
		overflow: hidden;
	}
`




function Account () {
	const [option, setOption] = useState(1);
	
	return (
		<ContainerLogin>
			<header>
				<div className={'header-headings ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
					<span>Sign in to your account</span>
					<span>Create an account</span>
					<span>Reset your password</span>
				</div>
			</header>
			<ul className='options'>
				<li className={option === 1 ? 'active' : ''} onClick={() => setOption(1)}>Sign in</li>
				<li className={option === 2 ? 'active' : ''} onClick={() => setOption(2)}>Sign up</li>
				<li className={option === 3 ? 'active' : ''} onClick={() => setOption(3)}>Forgot</li>
			</ul>
			<Form option={option} />

		</ContainerLogin>
	)
}

function Form ({ option }) {
    

	return (
		<form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input id='email' name='email' type='email' placeholder='E-mail' required />
				<input id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
			</div>
			<button className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
	)
}

export default Account;