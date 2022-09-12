import { Component } from '@angular/core';

@Component({
	selector: 'app-about',
	styleUrls: ['styles.css'],
	styles: [
		`
			.info-card-container {
				display: flex;
				flex-direction: column;
			}

			.info-card {
				display: grid;
				place-items: center;
				grid-template-columns: 14% 19% 65%;
				grid-column-gap: 1%;
				text-align: center;
				border-bottom: 1px solid lightgray;
				margin-bottom: 20px;
				padding-bottom: 20px;
			}

			.info-card-inverted {
				display: grid;
				grid-template-columns: 20% 64% 14%;
				grid-column-gap: 1%;
				text-align: center;
				place-items: center;
				border-bottom: 1px solid lightgray;
				margin-bottom: 20px;
				padding-bottom: 20px;
			}
			img {
				border-radius: 25px;
			}
			.fa {
				font-size: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 0px dotted black;
				border-radius: 6px;
				color: black;
				width: 100%;
				height: 100%;
				overflow: hidden;
				-webkit-transition: all 0.5s ease;
				-moz-transition: all 0.5s ease;
				-o-transition: all 0.5s ease;
				-ms-transition: all 0.5s ease;
				transition: all 0.5s ease;
			}
			.info-card-inverted:hover > .fa,
			.info-card:hover > .fa {
				background: black;
				color: white;
				font-size: 60px;
				-webkit-transition: all 0.5s ease;
				-moz-transition: all 0.5s ease;
				-o-transition: all 0.5s ease;
				-ms-transition: all 0.5s ease;
				transition: all 0.5s ease;
			}
		`,
	],
	template: `
		<div class="section1 p-30" id="Home">
			<div class="sec-title">
				<div class="pg-title">About</div>
				<div class="pg-sub-title">Who i am</div>
			</div>
			<div class="info-card-container">
				<div class="info-card">
					<i class="fa fa-fingerprint"></i>
					<h4>What identifies me?</h4>
					<p>
						<strong>Keep learning</strong><br />
						I like to learn. From a very young age I always had a great sense of curiosity. It is, perhaps, the most important driving force of my life. I dedicate myself intensely to know more and better each of the things I am passionate about. I enjoy surrounding myself with like-minded people who enjoy learning with full commitment and responsibility.
					</p>
				</div>
				<div class="info-card-inverted">
					<h4>Where I want to be next?</h4>
					<p>
						<strong>Transform my enthusiasm into high-value collaboration</strong><br />
						I decided to take a turn in my professional life and dedicate myself to this new industry. This gave me an extra challenge: to get in tune with the current state of the art. I am working and studying to become what I set as my goal in the next two years: to be a proficient software developer, focused on front-end technologies, but useful for the whole business. I'm looking to be a key part of a successful, fast-growing company.
					</p>
					<i class="fa fa fa-route"></i>
				</div>
				<div class="info-card">
					<i class="fa fa-graduation-cap"></i>
					<h4>What I've learnt so far?</h4>
					<p>
						<strong>Getting deeper, one step at a time</strong><br />
						I have been studying formally for more than 10 years. I started my university studies in 2012 after finishing high school. In 2018 I got my Bachelor's degree in Management. In 2019 I studied German for a short period (I finished the A1/1 course!). In 2020 I started my MBA. Also this year I got serious about web development: I started studying Javascript and Angular in depth. In 2021 I managed to pass my TOEFL exam with 7.5 out of 9.0. In 2022 I resigned from my position as Purchasing Manager to gain first-hand experience: I started working in a SaaS start-up.
					</p>
				</div>

				<div class="info-card-inverted">
					<h4>What I'm focusing on now?</h4>
					<p>
						<strong>Specializing in what's important</strong><br />
						I firmly believe that he who knows a little of everything ends up not knowing much of anything. I try to stay away from that idea. I'm currently deepening my learning in a quite specific stack: Angular, NodeJS and MongoDB. However, my current job required me to learn and work with several front and backend technologies, such as: Java 8+, Go, NestJS, Figma, Kafka, SQL Server, Redis, Kubernetes, Docker, etc.
					</p>
					<i class="fa fa-sharp fa-solid fa-book-open-reader"></i>
				</div>

				<div class="info-card">
					<i class="fa fa fa-heart"></i>
					<h4>What keeps me moving?</h4>
					<p>
						<strong>The main reasons</strong><br />
						I am constantly looking for new challenges. New skills to learn, people to meet, teams to integrate, and things to build. I discovered that dedicating myself professionally to software development was one of the best decisions of my life. I really enjoy solving real problems with technical knowledge and common sense. As soon as a project is finished, I am thinking about what the next one will be. There are always new reasons to be excited.
					</p>
				</div>
			</div>
		</div>
	`,
})
export class AboutComponent {}
