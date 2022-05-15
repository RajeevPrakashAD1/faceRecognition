import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import styled from 'styled-components';

//importing from bootstrap
import { Button, Form, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
// importing from styled
import { P1, P2, H1, H2 } from '../components/styledComponent/basicElement';

const CustomerForm = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data) => console.log(data);

	const { state } = useLocation();
	console.log(state);

	return (
		<React.Fragment>
			<Wrapper>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<P1> Phone Number</P1>
					<input {...register('Name', { required: true, maxLength: 20 })} />
					<P1> Age</P1>
					<input
						defaultValue={state && state.info[0]}
						{...register('age', { required: true, maxLength: 20 })}
					/>
					{/* 
					<input {...register('gender', { required: true, maxLength: 20 })} /> */}
					<P1> Gender</P1>
					<select
						defaultValue={state && state.info[1]}
						{...register('Gender', { required: true, maxLength: 20 })}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					<P1> Type</P1>
					<select {...register('type', { required: false, maxLength: 20 })}>
						<option value="regular">Regular</option>
						<option value="weekly">weekly</option>
						<option value="monthly">monthly</option>
					</select>
					<P1> Extra Information</P1>
					<input {...register('extraInformation', { required: true, maxLength: 20 })} />
					<Button className="mt-5" variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Wrapper>
		</React.Fragment>
	);
};

export default CustomerForm;

const Wrapper = styled.div`margin: 50px;`;
