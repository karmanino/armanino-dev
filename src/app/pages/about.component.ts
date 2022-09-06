import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	styles: [],
	template: `
	  <div class="section1 p-30" id="Home">
		<div class="sec-title">
		  <!-- <div class="pg-sub-title">Home</div> -->
		  <div class="pg-title">About</div>
		</div>
		<div class="d-flex-align-center">
		  <div class="user-img"><img src="assets/main.photo.jpg" /></div>
		  <div class="user-profile flex-1">
			<div class="pro-details">
			  <div class="sm-text">Hello! My name is</div>
			  <div class="name">Juan José Armanino</div>
			  <div class="role">Full-Stack Developer Jr.</div>
			</div>
			<div class="text">
			  A passionate and enthusiastic entrepreneur navigating the winding
			  road to becoming a full-fledged software engineer (if that's really
			  achievable these days!). I dedicated more than ten years to 9-to-5
			  office jobs. Then I decided to take a turn and dedicate myself to
			  what I've always been passionate about: developing valuable
			  solutions for real people.
			</div>
			<div class="pr-list">
			  <ul>
				<li>
				  <i class="fa fa-map-marker" aria-hidden="true"></i> Salta,
				  Argentina
				</li>
				<li>
				  <i class="fa fa-phone" aria-hidden="true"></i> +54 9 3875763433
				</li>
				<li>
				  <i class="fa fa-envelope" aria-hidden="true"></i>
				  juanjo@armanino.dev
				</li>
				<li>
				  <i class="fa fa-calendar" aria-hidden="true"></i> 11th March,
				  1994
				</li>
			  </ul>
			</div>
			<div class="social-icons-head">
			  <ul>
				<li>
				  <a href="https://www.linkedin.com/in/armanino/"
					><i class="fa fa-linkedin-square" aria-hidden="true"></i
				  ></a>
				</li>
				<li>
				  <a href="https://web.whatsapp.com/send/?phone=5493875763433"
					><i class="fa fa-whatsapp" aria-hidden="true"></i
				  ></a>
				</li>
				<li>
				  <a href="https://twitter.com/juanjoarmanino"
					><i class="fa fa-twitter" aria-hidden="true"></i
				  ></a>
				</li>
				<li>
				  <a href="https://github.com/karmanino"
					><i class="fa fa-github" aria-hidden="true"></i
				  ></a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </div>
	`,
  })
export class AboutComponent {}
