import React from 'react';
import './AgenciesShowCaseStyle.css';
import bgmain from '../../../../assets/landingImages/bg-main.png';
import agencysearchIcon from '../../../../assets/landingImages/agencysearchIcon.svg';
import BeforeAfterSlider from './BeforeAfterSlider';
// import AgenciesFaq from '../AgenciesFaq/AgenciesFaq';
// import MultiEffectSlider from '../MultiEffectSlider/MultiEffectSlider';

import modalImg2 from "../../../../assets/landingImages/model-img2.png";
import leftImg from '../../../../assets/landingImages/left-side.jpg'
import rightImg from '../../../../assets/landingImages/right-side.jpg';

const AgenciesShowCase = () => {
	const data= {
		laptop:modalImg2,
		img1:leftImg,img2:rightImg
	  }
  return (
    <div class="main-designers">
	<div class="container">
		<div class="main-content">
			<div class="left-section">
				<div class="top-content">
					<h1>Best <span>Website Designers</span></h1>
					<p>The mission of great design is to increase your brand recognition & profits by sale volume. Our registry lists the best designers in the world & brings them to your service & the design of your store showcasing your goods, products, or services.</p>
				</div>
				
				<form method="" action="" enctype="multipart/form-data">
				<div class="drop-search">
					<input type="search" name="" placeholder="I am looking for"/>
					<div class="dropdown"><span class="vertical-line">&#x7C;</span>
						  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						    Services
						  </button>
						  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						    <li><a class="dropdown-item" href="#">Action</a></li>
						    <li><a class="dropdown-item" href="#">Another action</a></li>
						    <li><a class="dropdown-item" href="#">Something else here</a></li>
						  </ul>
					</div>
					<button type="submit"><img src={agencysearchIcon} alt="search-icon"/></button>
				</div>
				</form>

			</div>
			<div class="right-section">
				<img class="main-img" src={bgmain} alt="background-img"/>
				<div class="content beforeAfter">
					{/* <img src="assets/images/left-side.png" alt="Before after left image" />
            		<img src="assets/images/right-side.png" alt="Before after right image" /> */}
					<BeforeAfterSlider imagesData={data}/>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default AgenciesShowCase