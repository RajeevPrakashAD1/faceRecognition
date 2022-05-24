import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import styled from 'styled-components';
import { getFullFaceDescription } from '../faceDetection/faceDetection';
import {
	getFullFaceDescription,
	isFaceDetectionModelLoaded,
	isFacialLandmarkDetectionModelLoaded,
	isFeatureExtractionModelLoaded,
	loadModels
} from '../faceDetection/faceDetection';

//importing from bootstrap
import { Button, Form, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
// importing from styled
import { P1, P2, H1, H2 } from '../components/styledComponent/basicElement';

const CustomerForm = () => {
	const url = 'http://localhost:5000/register';
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const { state } = useLocation();
	const onSubmit = async (data) => {
		let StringImage = state.image.toString('base64');
		console.log('sending', data, state);

		const formData = new FormData();

		for (var key in data) {
			formData.append(key, data[key]);
		}
		formData.append('image', StringImage);
		//formData.append('faceDesc', fullDesc.toString());
		// console.log('formdata', { ...formData });
		// for (var key of formData.entries()) {
		// 	console.log(key[0] + ', ' + key[1]);
		// }
		//const formHeaders = formData.getHeaders();

		const config = {
			'content-type': 'multipart/form-data',
			'X-Custom-Header': 'lala'
		};
		try {
			const res = await axios.post(url, formData, config);
			console.log(res);

			//  props.history.push('/mock-test/view-mock-test-question');
		} catch (err) {
			console.log(err);
		}
		// data.Image = state.imgSrc;
		//const res = await axios.post('http://localhost:5000/register', data);
		//console.log('response of sending data', res);
	};

	//console.log(state);
	useEffect(() => {});

	return (
		<React.Fragment>
			<Wrapper>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<P1> Phone Number</P1>

					<input {...register('phoneNumber', { required: true, maxLength: 20 })} />
					{/* {errors.Name?.type === 'required' && "Phone Number is required"} */}
					<P1> Name</P1>
					<input {...register('name', { maxLength: 20 })} />
					<P1> Age</P1>
					<input
						defaultValue={state && state.info[0]}
						{...register('age', { required: true, maxLength: 20 })}
					/>

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
					{/* {errors.extraInformation?.type === 'required' && "extra information is required"} */}

					<Button className="mt-5" variant="primary" type="submit">
						Submit
					</Button>
				</Form>
				<img src={state.image} alt="userimage" />
			</Wrapper>
		</React.Fragment>
	);
};

export default CustomerForm;

const Wrapper = styled.div`margin: 50px;`;
