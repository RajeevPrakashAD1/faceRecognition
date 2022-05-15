import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import NewPost from './newpost';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import styled from 'styled-components';

//importing from bootstrap
import { Button } from 'react-bootstrap';

//importing from styled components
import { P1, P2, H1, H2 } from '../components/styledComponent/basicElement';

const FaceInput = () => {
	const [ faces, setFaces ] = useState([]);

	const imgRef = useRef();
	const canvasRef = useRef();
	const videoRef = useRef(null);
	const [ gotInfo, setGotInfo ] = useState(false);

	const [ info, setInfo ] = useState([ 'detecting...', 'detecting...' ]);
	const history = useHistory();

	// const imageSrc = useRef(null);
	async function delay(ms) {
		// return await for better async stack trace support in case of errors.
		return await new Promise((resolve) => setTimeout(resolve, ms));
	}

	//video constraints for taking input video
	const videoConstraints = {
		width: 1280,
		height: 720,
		facingMode: 'user'
	};

	const detectAgain = () => {
		setInfo([ 'detecting...', 'detecting...' ]);
		setGotInfo(false);
		console.log('gotinfo', gotInfo);
		handleImage();
	};

	const handleImage = async () => {
		await delay(5000);
		console.log('handle image called', gotInfo);

		if (gotInfo === false) {
			if (videoRef.current !== null) {
				const detections = await faceapi
					.detectAllFaces(videoRef.current.video, new faceapi.TinyFaceDetectorOptions())
					// .withFaceLandmarks()
					.withAgeAndGender();

				console.log('detections res = ', detections);
				if (detections.length > 0) {
					if (gotInfo === false) setInfo([ detections[0].age, detections[0].gender ]);
					setGotInfo(true);
				}
			}
		} else {
		}
	};

	const handleSubmit = () => {
		history.push({ pathname: '/userDetails', state: { info: info } });
	};

	useEffect(
		() => {
			const loadModels = () => {
				Promise.all([
					faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
					faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
					faceapi.nets.faceExpressionNet.loadFromUri('/models'),
					faceapi.nets.ageGenderNet.loadFromUri('/models')
				])
					.then(handleImage)
					.catch((e) => console.log(e));
			};

			videoRef && loadModels();
		},
		[ gotInfo ]
	);
	return (
		<React.Fragment>
			<Wrapper>
				<div className="pd1">
					<H2> once detected please proceed with success</H2>
					<div>
						<P1>{info[0]}</P1>
						<P1>{info[1]}</P1>
					</div>
					{/* <video ref={videoRef} /> */}
					<Webcam
						audio={false}
						height={300}
						ref={videoRef}
						mirrored={true}
						width={500}
						videoConstraints={videoConstraints}
					/>
				</div>
				<Button variant="primary" onClick={detectAgain}>
					Detect Again
				</Button>
				<Button onClick={handleSubmit} className="m-4" variant="success">
					Success
				</Button>{' '}
			</Wrapper>
		</React.Fragment>
	);
};

//styled component for writing css

const Wrapper = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.pd1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
export default FaceInput;
