import { Component } from '@angular/core';

@Component({
	selector: 'app-portfolio',
	styleUrls: ['styles.css'],
	styles: [
		`
			.card {
				width: 100%;
				-webkit-transition: all 0.5s ease;
				-moz-transition: all 0.5s ease;
				-o-transition: all 0.5s ease;
				-ms-transition: all 0.5s ease;
				transition: all 0.5s ease;
				overflow: hidden;
				svg {
					transition: all 0.5s ease;
					-webkit-filter: grayscale(100%);
				}
			}

			.card:hover {
				transition: all 0.5s ease;
				filter: drop-shadow(0 0 0.75rem grey);
				svg {
					-webkit-filter: grayscale(0%);
				}
			}

			.row {
				align-items: stretch;
			}

			.card {
				border: 1px solid lightgray;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.col {
				display: flex;
			}

			.album {
				padding-top: 10px !important;
			}

			.sec-title {
				margin-bottom: 10px;
			}

			.card-body {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.framework {
				position: absolute;
				bottom: 5%;
				right: 6%;
				font-size: 24px;
				opacity: 0.4;
			}
		`,
	],
	template: `
		<div class="section1 p-30" id="Home">
			<div class="sec-title">
				<!-- <div class="pg-sub-title">Home</div> -->
				<div class="pg-title">Portfolio</div>
			</div>
			<div class="col-lg-6 col-md-8 mx-auto text-center">
				<h1 class="fw-light">My work</h1>
				<p class="lead text-muted">
					Feel free to visit both the live website and the source code of each project hosted on Github. All of them are still on development, so don't
					hesitate to reach me for recommendations! 💪
				</p>
			</div>
			<div class="album py-5 bg-light">
				<div class="container">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Webchat"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/chat.png')">
									<title>Crypto tracker</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Web chat</h5>
									<p class="card-text">
										Online web chat with authentication and state management. Made with Angular 14, NodeJS,
										Socket.IO, Bootstrap 5 and Sass.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://sockets-webchat.herokuapp.com/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/socketio-server" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-angular"></i>
									<i class="framework fa-brands fa-mongo"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/cryptotracker.png')">
									<title>Crypto tracker</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Crypto tracker</h5>
									<p class="card-text">
										Application that fires push notifications to keep track of P2P current prices of fiat currencies on Binance. Made with Angular 14, MongoDB,
										Websockets, RxJS 7, Material UI and NodeJS with Express in the back-end.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://crypto-p2p-tracker.herokuapp.com/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/crypto-tracking-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-angular"></i>
									<i class="framework fa-brands fa-mongo"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/expenses.png')">
									<title>Expenses App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Expenses App</h5>
									<p class="card-text">
										Basic and friendly application to track your personal expenses. Made with with Angular 14, Redux (NgRx), Firestore and Firebase
										Authentication.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://expenses-app-6c86a.web.app/" target="_blank" class="btn btn-outline-danger"><i class="fa fa-paper-plane"></i> Go</a>
											<a href="https://github.com/karmanino/expenses-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
									</div>
								</div>
								<i class="framework fa-brands fa-angular"></i>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/todolist.png')">
									<title>Angular To-Do App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Angular To-Do App</h5>
									<p class="card-text">Simple CRUD To-Do list application made with Angular 14 and Redux (NgRx).</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://karmanino.github.io/angular-to-do-app/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/angular-to-do-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-angular"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/gifjsx.png')">
									<title>Gif Fetch App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Gif Fetch App</h5>
									<p class="card-text">Application made with React 17 and Animate.css 4.1.1 to fetch GIFs online by keywords.</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://karmanino.github.io/react-gif-expert-app/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/react-gif-expert-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-react"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/todoapp.png')">
									<title>Angular To-Do App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">React To-Do App</h5>
									<p class="card-text">Simple CRUD To-Do list application made with React 17 and Bootstrap 4.5.</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://karmanino.github.io/react-to-do-app/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/react-to-do-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-react"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/ngrx.png');">
									<title>NgRx Effects App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">NgRx Effects App</h5>
									<p class="card-text">Simple application made with Angular 14, NgRx, and consuming REST API.</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://karmanino.github.io/ngrx-effects-app" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/ngrx-effects-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-angular"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/gifsearchng.png')">
									<title>Gif Search</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Gif Search App</h5>
									<p class="card-text">Simple application to fetch GIFs online by keywords. Made with Angular 13, Bootstrap 5 and Animate.css 4.1.1.</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://karmanino.github.io/angular-gif-search/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/angular-gif-search" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-angular"></i>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="CryptoTracker"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
									style="background: no-repeat center/cover url('assets/projects/imgapp.png')">
									<title>Image Search App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Image Search App</h5>
									<p class="card-text">Simple application made with React to search for images online by keywords.</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://karmanino.github.io/react-gallery-app/" target="_blank" class="btn btn-outline-danger"
												><i class="fa fa-paper-plane"></i> Go</a
											>
											<a href="https://github.com/karmanino/react-gallery-app" target="_blank" class="btn btn-outline-secondary"
												><i class="fa-brands fa-github"></i> Source</a
											>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
									<i class="framework fa-brands fa-react"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
})
export class PortfolioComponent {}
