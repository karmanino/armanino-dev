import { Component } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	template: ` <div class="left-content p-30">
		<div class="logo">
			<a href="index.html">
				<span>JUAN JOSÉ</span>
				<span><strong>ARMANINO</strong></span>
			</a>
		</div>
		<div class="nav">
			<ul>
				<li><a routerLink="/home">Home</a></li>
				<li><a routerLink="/about">About</a></li>
				<li><a routerLink="/portfolio">Portfolio</a></li>
				<!-- <li><a routerLink="/education">Education</a></li> -->
				<!-- <li><a routerLink="/contact">Contact</a></li> -->
				<li><a href="assets/Resume - Juan José Armanino - Aug 22.pdf" target="_blank" style="color:red" class="last">RESUME (PDF)</a></li>
			</ul>
		</div>
		<div class="left-footer">
			<div class="social-icons">
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/armanino/"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
					</li>
					<li>
						<a href="https://web.whatsapp.com/send/?phone=5493875763433"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
					</li>
					<li>
						<a href="https://twitter.com/juanjoarmanino"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a>
					</li>
					<li>
						<a href="https://github.com/karmanino"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
					</li>
				</ul>
			</div>
			<div class="foot-contact">
				<ul>
					<li><a href="mailto:juanjo@armanino.dev">juanjo@armanino.dev</a></li>
				</ul>
			</div>
		</div>
	</div>`,
	styles: [],
})
export class SidebarComponent {}
