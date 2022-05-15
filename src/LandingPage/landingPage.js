// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './landingPage.css';
// import style from './landingpage.module.css';
// import Slider from 'react-slick';
// import PreBookButton2 from './prebookbutton2';
// import PreBookButton from './prebookbutton';
// import ReactPlayer from 'react-player';
// //sdtyled components
// import { S2div, H1, P1, S5div, P2, Wrapper7, Wrapper11, Wrapper8, Mynav } from './styledcomponent';

// //icons
// import FacebookIcon from '@material-ui/icons/Facebook';

// //images
// import s9 from './images/s9.svg';
// import s2 from './images/s2.svg';
// import s3 from './images/s3.png';
// import s4 from './images/s4.svg';
// import s5 from './images/s5.svg';
// import s6 from './images/s6.png';
// import s11 from './images/s11.svg';
// import s72 from './images/s72.svg';
// import s71 from './images/s71.svg';
// import s73 from './images/s73.svg';

// import s81 from './images/s81.svg';
// import s8m from './images/s8b.png';
// import s8b from './images/s8b.svg';
// import logo from './images/logo.svg';
// import cart from './images/cart.svg';

// //video
// import v2 from './video/v3.mp4';
// //mport v2 from './video/v2.mp4';

// const LandingPage = () => {
// 	var settings = {
// 		centerMode: true,
// 		infinite: true,
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		speed: 700,

// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					centerMode: false,
// 					slidesToShow: 3,
// 					slidesToScroll: 1
// 				}
// 			},
// 			{
// 				breakpoint: 600,
// 				settings: {
// 					centerMode: false,
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					centerMode: false,
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			}
// 		]
// 	};

// 	return (
// 		<React.Fragment>
// 			<div className="wrapper" style={{ margin: 'auto' }}>
// 				<Mynav>
// 					<div>
// 						<Link to="/">
// 							<img src={logo} height="40px" alt="logo" />
// 							<P2 style={{ display: 'inline-block', color: 'white' }} className="logo-text">
// 								AIROCO
// 							</P2>
// 						</Link>
// 					</div>

// 					<div>
// 						<Link to="/preorder">
// 							<p className="glow logo-text">BUY NOW</p>
// 							<img src={cart} alt="cart" className="cart" />
// 						</Link>
// 					</div>
// 					{/* <div>
// 						<Link to="/">
// 							<img src={cart} height="40px" alt="logo" />
// 							<P2 style={{ display: 'inline-block', color: 'white' }} className="logo-text">
// 								PRE ORDER
// 							</P2>
// 						</Link>
// 					</div> */}
// 				</Mynav>

// 				<section id="section1">
// 					<div className="tdiv">
// 						<div>
// 							<h1 className="title">AIR</h1>
// 						</div>
// 						<div>
// 							<h1 className="title">OCO</h1>
// 						</div>
// 					</div>
// 					<div className="parent-nav-button">
// 						<Link to="/preorder">
// 							<button className="nav-button">BUY NOW</button>
// 						</Link>
// 					</div>
// 				</section>

// 				<section id="section2">
// 					<Container fluid>
// 						<S2div>
// 							<Row>
// 								<Col lg="6" md="6" sm="12" className="Cols2textDiv">
// 									<div className="s2textDiv">
// 										<P1> Airoco - Nurturing The Air </P1>
// 										<H1> Unlock The Power of Nature with Airoco Organic Air Purifier</H1>
// 										<P1>
// 											Creating a healthier & delightful environment with a new type of purifier,
// 											inspired by nature.
// 										</P1>
// 									</div>
// 								</Col>

// 								<Col lg="6" md="6" className="Cols2textDiv">
// 									<img src={s2} alt="o" className="img img2" />
// 								</Col>
// 							</Row>
// 						</S2div>
// 					</Container>
// 				</section>
// 				<section id="section3">
// 					<contaniner fluid>
// 						<S2div>
// 							<Row>
// 								<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }} sm={{ order: 'first' }}>
// 									<img src={s3} alt="o" className="img" />
// 								</Col>
// 								<Col lg="6" md="6" sm="12" className="Cols2textDiv">
// 									<div className="s2textDiv">
// 										<H1>Let Us Take Care Of Our Caretaker!</H1>
// 										<P1>
// 											Airoco is an innovative natural product design that equally effectively
// 											cleans the air you breathe without affecting the environment. Inspired by
// 											the English countryside, Airoco uses aesthetic materials to connect you with
// 											nature. The wish list hides a host of features and strives to keep your air
// 											clean.
// 										</P1>
// 									</div>
// 								</Col>
// 							</Row>
// 						</S2div>
// 					</contaniner>
// 				</section>
// 				<section id="section4">
// 					<contaniner fluid>
// 						<S2div>
// 							<Row>
// 								<Col lg="6" md="6" sm="12" className="Cols2textDiv">
// 									<div className="s2textDiv">
// 										<H1>AIROCO! Future of Air Purifier!</H1>
// 										<P1>
// 											While it was just a layman thing to just talk about nature conservation on
// 											the so-called tv series! We at AIROCO went a step ahead to nurture the air &
// 											our environment! It is one of those feelings that drive our love of
// 											‘Nurturing Air’ & our desire to learn more & more about it!
// 										</P1>
// 										<PreBookButton />
// 									</div>
// 								</Col>
// 								<Col lg="6" md="6" className="" style={{ display: 'flex', justifyContent: 'flex-end' }}>
// 									<img src={s4} alt="o" width="90%" />
// 								</Col>
// 							</Row>
// 						</S2div>
// 					</contaniner>
// 				</section>

// 				<section id="section5">
// 					<contaniner fluid>
// 						<S5div>
// 							<div className="video-section">
// 								<div className="video-background">
// 									<video
// 										autoplay
// 										muted
// 										loop
// 										id="vid"
// 										//   width="100vw"
// 										height="600px"
// 									>
// 										<source src={v2} type="video/mp4" />
// 									</video>
// 								</div>
// 								<div className="overlay-text">
// 									<div className="s5t">
// 										<H1 className="s5H1"> AIROCO</H1>
// 										<P1 className="s5P1">#Nurturing the Air</P1>
// 										<PreBookButton />
// 										<div className="underline" />
// 									</div>
// 								</div>
// 							</div>

// 							{/* <Col
//                   className="s5i"
//                   xs={{ order: "last" }}
//                   lg="6"
//                   md={{ order: "first" }}
//                 >
//                   <video id="vid" width="320" height="240" autoplay loop muted>
//                     <source src={v2} type="video/mp4" />
//                   </video>
//                 </Col>
//                 <Col
//                   lg="6"
//                   md="6"
//                   sm="12"
//                   className="s5c"
//                   style={{ display: "flex", justifyContent: "flex-end" }}
//                 >
//                   <div className="s5t">
//                     <H1 className="s5H1"> AIROCO</H1>
//                     <P1 className="s5P1">#Nursing The Home</P1>
//                     <PreBookButton />
//                     <div className="underline" />
//                   </div>
//                 </Col>
//                */}
// 						</S5div>
// 					</contaniner>
// 				</section>
// 				<section id="section6">
// 					<contaniner fluid>
// 						<S2div>
// 							<Row>
// 								<Col lg="6" md="6" sm="12" className="Cols2textDiv" xs={{ order: 'last' }}>
// 									<div className="s2textDiv2">
// 										<P2>Beautiful Plant Varieties</P2>
// 										<P1>
// 											We understand your need, therefore we provide beautiful plant varieties for
// 											your AIROCO. Check out our various collections!
// 										</P1>
// 										<P2>Fascinating Colour Variant</P2>
// 										<P1>
// 											There is more than 5 colour variant for your AIROCO! Choose the Best for
// 											You! Check out our various collections!
// 										</P1>
// 										<P2>Choose Your Desired From Our Collections!</P2>
// 										<P1>
// 											In every walk with nature, one receives far more than he seeks.” So choose
// 											the best for you. Choose AIROCO!
// 										</P1>
// 										<PreBookButton timer="t" />
// 									</div>
// 								</Col>

// 								<Col md="6" className="Cols2textDiv">
// 									<img src={s6} alt="o" className="img" />
// 								</Col>
// 							</Row>
// 						</S2div>
// 					</contaniner>
// 				</section>

// 				<section id="section7">
// 					<Container fluid>
// 						<Wrapper7>
// 							<Row>
// 								<Col md={4} className="row7">
// 									<div className="div7">
// 										<img src={s71} hight="70px" width="70px" className="iconImg" alt="0" />
// 										<P2 style={{ color: 'white' }}> 100% Natural</P2>
// 										<P1 style={{ color: 'white' }}>
// 											We use 90% less plastic than any other air purifier. We believe in making
// 											green products.
// 										</P1>
// 									</div>
// 								</Col>
// 								<Col md={4} className="row7">
// 									<div className="div7">
// 										<img src={s73} hight="70px" width="70px" className="iconImg" alt="0" />
// 										<P2 style={{ color: 'white' }}> Low maintenance </P2>
// 										<P1 style={{ color: 'white' }}>
// 											Almost zero maintenance cost, with no filter replacement and nominal energy
// 											consumption, makes it a sustainable product
// 										</P1>
// 									</div>
// 								</Col>
// 								<Col md={4} className="row7">
// 									<div className="div7">
// 										<img src={s73} hight="70px" width="70px" className="iconImg" alt="0" />
// 										<P2 style={{ color: 'white' }}> Aesthetic Design </P2>
// 										<P1 style={{ color: 'white' }}>
// 											Airoco design is aesthetically sober and plain, with a range of colors. So
// 											it can be used in your desired place whether it is an office or home.
// 										</P1>
// 									</div>
// 								</Col>
// 							</Row>
// 						</Wrapper7>
// 					</Container>
// 				</section>
// 				<section id="section8">
// 					<contaniner fluid>
// 						<Wrapper8>
// 							<div className="header8">
// 								<H1> Benefits of Airoco </H1>
// 								<P2>We believe in providing real benefits to our customers. </P2>
// 							</div>
// 							<Row className="row8">
// 								<Col md={12} lg={3} className="col8">
// 									<div>
// 										<P2>Reduce Pollution</P2>
// 										<P1>
// 											It reduces PM 2.5, PM 10 & TVOCs. It also removes harmful gases & provides
// 											you very clean & fresh environment! !
// 										</P1>
// 									</div>
// 									<div>
// 										<P2>Reduces Allergy & Dizziness</P2>
// 										<P1>
// 											It helps you from allergies that are caused by poor ventilation, cooking,
// 											pets or some other unwanted particles.
// 										</P1>
// 									</div>
// 									<div>
// 										<P2>Reduces Stress</P2>
// 										<P1>
// 											The green colour is a symbol of productivity. It increases your cognitive
// 											response as well as helps you reduce your stress.
// 										</P1>
// 									</div>
// 								</Col>
// 								<Col md={12} lg={3} className="col8i">
// 									<img src={s8m} alt="0" className="img2" />
// 								</Col>

// 								<Col md={12} lg={3} className="col8 col82">
// 									<div>
// 										<P2>Increases Productivity</P2>
// 										<P1>
// 											A UK study found bringing plants into the workplace increased productivity
// 											by 15% & reduces your stress.
// 										</P1>
// 									</div>
// 									<div>
// 										<P2>Increases Oxygen Content</P2>
// 										<P1>
// 											A house plant can increase oxygen level by 200 cc/min. And 8 indoor plants
// 											collectively provide enough oxygen for a person in a day.
// 										</P1>
// 									</div>
// 									<div>
// 										<P2>Better Sleep</P2>
// 										<P1>
// 											Plants & carbon granules don’t allow CO2 to accumulate indoors & provide you
// 											with better & peaceful sleep.
// 										</P1>
// 									</div>
// 								</Col>
// 							</Row>
// 						</Wrapper8>
// 					</contaniner>
// 				</section>

// 				<section className="section9">
// 					<div className="section9-content">
// 						<h2>Bring nature home!</h2>
// 						<p> We believe in providing real benefits to our customers.</p>
// 					</div>

// 					<div className="section9-button">
// 						<PreBookButton timer="t" />
// 					</div>
// 				</section>
// 				{/*
// 				<div className="section10">
// 					<div className="section10-content">
// 						<div className="s10-heading">
// 							<h2>Designed to be the best looking filter around</h2>
// 						</div>
// 						<Slider {...settings}>
// 							<div className="slider_container">
// 								<img
// 									src={
// 										'https://images.unsplash.com/photo-1521334884684-d80222895322?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
// 									}
// 								/>
// 							</div>

// 							<div className="slider_container">
// 								<img
// 									src={
// 										'https://images.unsplash.com/photo-1552242718-c5360894aecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
// 									}
// 								/>
// 							</div>

// 							<div className="slider_container">
// 								<img
// 									src={
// 										'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
// 									}
// 								/>
// 							</div>
// 							<div className="slider_container">
// 								<img
// 									src={
// 										'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
// 									}
// 								/>
// 							</div>
// 						</Slider>
// 					</div>
// 				</div> */}

// 				<section id="section11">
// 					<contaniner fluid>
// 						<Wrapper11>
// 							<Row>
// 								<Col md="6" className="Cols2textDiv" xs={{ order: 'last' }} sm={{ order: 'first' }}>
// 									<img src={s11} alt="o" className="img img11" style={{ marginBottom: '49px' }} />
// 								</Col>
// 								<Col lg="6" md="6" sm="12" className="Cols2textDiv">
// 									<div className="s2textDiv">
// 										<H1 style={{ color: 'white' }}>
// 											Choose your desired AIROCO from our collections!{' '}
// 										</H1>
// 										<P1 style={{ color: 'white' }}>
// 											“In every walk with nature, one receives far more than he seeks.” So choose
// 											the best for you. Choose AIROCO!
// 										</P1>

// 										<PreBookButton2 />
// 									</div>
// 								</Col>
// 							</Row>
// 						</Wrapper11>
// 					</contaniner>
// 				</section>

// 				{/** Aniket started */}

// 				<footer class="footer-bs">
// 					<div class="row">
// 						<div class="col-md-3 footer-brand animated fadeInLeft">
// 							<img src={logo} /> <h2 style={{ display: 'inline-block' }}>AIROCO</h2>
// 							<div className="" style={{ width: '220px' }}>
// 								<p>Be sure to take a look at our Terms of Use and Privacy Policy</p>
// 							</div>
// 						</div>
// 						<div class="col-md-5 footer-nav animated fadeInUp">
// 							<div class="col-md-6">
// 								<h4>ADDRESS</h4>
// 								<ul class="address">
// 									<li>C-26,Block C,Sector 65, Noida-201301</li>
// 									<li>
// 										<i class="fas fa-phone" /> +917004535507
// 									</li>
// 									<li>
// 										<i class="fas fa-envelope-square" /> info@gloalgeus.com
// 									</li>
// 								</ul>
// 							</div>

// 							<div class="col-md-6">
// 								<h4>ABOUT US</h4>
// 								<ul class="pages">
// 									<li>
// 										<Link to="/refundpolicy">
// 											<a href="#">Refund Policy</a>
// 										</Link>
// 									</li>
// 									<li>
// 										<Link to="/shippingpolicy">
// 											{' '}
// 											<a href="#">Shipping policy </a>
// 										</Link>
// 									</li>
// 									<li>
// 										<Link to="/privacypolicy">
// 											{' '}
// 											<a href="#">PRIVACY POLICY</a>
// 										</Link>
// 									</li>
// 									<li>
// 										<Link to="/terms&conditions">
// 											<a href="#">TERMS & CONDITIONS</a>
// 										</Link>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>

// 						<div class="col-md-4 footer-ns animated fadeInRight">
// 							<h4>Subscribe our Newsletter</h4>

// 							<p>
// 								<div class="input-group">
// 									<input type="text" class="form-control" placeholder="Your email..." />
// 									<span class="input-group-btn">
// 										<button class="btn btn-default" type="button">
// 											SUBSCRIBE
// 										</button>
// 									</span>
// 								</div>
// 							</p>

// 							<div>
// 								<ul className="footer-icons">
// 									<li>
// 										<a href="https://www.instagram.com/airoco.in/" target="_blank">
// 											<i class="fab fa-instagram" />
// 										</a>
// 									</li>
// 									<li>
// 										<a href="https://www.facebook.com/airoco2021/" target="_blank">
// 											<i class="fab fa-facebook" />
// 										</a>
// 									</li>
// 									<li>
// 										<a
// 											href="https://www.linkedin.com/company/airoco1/?viewAsMember=true"
// 											target="_blank"
// 										>
// 											<i class="fab fa-linkedin" />
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</footer>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default LandingPage;
