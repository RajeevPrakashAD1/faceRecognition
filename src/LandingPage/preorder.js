import React, { useEffect } from 'react';
import img from './images/preorderImages.svg';
import itemimg1 from './images/preorderImages2.svg';
import itemimg2 from './images/blacksmall.svg';
import './preorder.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function PreOrder() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	useEffect(() => {
		const Script = document.createElement('script');
		//id should be same as given to form element
		const Form = document.getElementById('donate');
		Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js');
		Script.setAttribute('data-payment_button_id', 'pl_IkqwJz7w6XUD03');
		Form.appendChild(Script);
	}, []);
	return (
		<React.Fragment>
			<section>
				{' '}
				{/*<nav class="navbar navbar-light bg-light justify-content-between">
                                      <a class="navbar-brand">Navbar</a>
                                      <form class="form-inline">
                                       
                                      </form>
                                    </nav>*/}{' '}
				<div class="main">
					<Link to="/">
						<button class="btn btn-default btn-back" type="button">
							Back{' '}
						</button>{' '}
					</Link>{' '}
					<div class="container">
						<div class="signup-content">
							<div class="signup-img">
								<Slider {...settings}>
									<div>
										<img src={img} />{' '}
									</div>
									<div>
										<img src={img} />{' '}
									</div>
									<div>
										<img src={img} />{' '}
									</div>{' '}
								</Slider>{' '}
							</div>
							<div class="signup-form">
								<form class="register-form" id="donate">
									<h2 className="preorderHeading">
										Complete your Order <br />
										<span>
											{/* Book your product now at <span className="highlight1">5700 / -only</span>{' '} */}
											and avail a discount of
											{/* <span className="highlight1"> Flat 25 % on MRP</span>{' '} */}
										</span>{' '}
									</h2>{' '}
									<p> 1. Choose your product varient </p>{' '}
									<div class="form-radio">
										<div className="item-choose">
											<div class="form-radio-item">
												<input type="radio" name="item" id="item1" checked />
												<label for="item1" className="item-label">
													<p>
														Black <br />
														<span> MRP₹ 5700 </span>{' '}
													</p>{' '}
													<img className="itemimg" src={itemimg2} />{' '}
												</label>

												<span class="check" />
											</div>{' '}
										</div>{' '}
										<div className="item-choose">
											<div class="form-radio-item">
												<input type="radio" name="item" id="item2" />
												<label for="item2" className="item-label">
													<p>
														White <br />
														<span> MRP₹ 5700 </span>{' '}
													</p>{' '}
													<img className="itemimg" src={itemimg1} />{' '}
												</label>

												<span class="check" />
											</div>{' '}
										</div>{' '}
									</div>{' '}
									{/*	<p> 4. Continue to payment </p>{' '}*/}
									<p> 2. Continue to payment </p>
									<div className="payment-div">
										<div className="cp">
											<h4> Buy Now </h4> <p> Continue to payment </p>
										</div>
										<div className="btn-div" />
									</div>
								</form>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</section>{' '}
		</React.Fragment>
	);
}

export default PreOrder;
