import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button, Form, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
//images
import home from '../asset/home.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
	const handleClick = () => {
		console.log();
	};
	return (
		<React.Fragment>
			<Wrapper>
				<Link to="/register">
					<Button className="mt-5 register" variant="primary">
						Register
					</Button>
				</Link>
			</Wrapper>
		</React.Fragment>
	);
};

export default Home;
const Wrapper = styled.div`
	background-image: url(${home}), url('');
	height: 100vh;
	width: 100vw;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	margin-top: -20px;
	display: flex;
	justify-content: center;
	align-items: center;

	.register {
		background-color: black;
		width: 300px;
		height: 50px;
		font-size: 20px;
		&:hover {
			background: none;
		}
	}
`;
