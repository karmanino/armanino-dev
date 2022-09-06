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
        svg {
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
        justify-content: space-between
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
					Feel free to visit both the live website and the source code of each oroject hosted on Github. Some of them
					are still on development, so don't hesitate to reach me for recommendations! 💪
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
										Application that fires push notifications to keep track of P2P prices of fiat currencies on Binance.
										Made with Angular 14, MongoDB, Websockets, RxJS, Material UI and NodeJS and Express in the back-end.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
										Basic expenses tracking application with authentication made with Angular 14, NgRx, Firebase and
										Firestore.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<a href="https://expenses-app-6c86a.web.app/" target="_blank" class="btn btn-outline-danger"
												>Go</a
											>
											<a
												href="https://github.com/karmanino/expenses-app"
												target="_blank"
												class="btn btn-outline-secondary"
												>Source</a
											>
										</div>
										<i class="fa fa-react" aria-hidden="true"></i>
									</div>
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
									<p class="card-text">Simple application made with Angular 14, NgRx, and REST APIs</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
									<h5 class="card-title">Angular To-Do Appr</h5>
									<p class="card-text">Simple To-Do list application made with Angular and NgRx</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
									style="background: no-repeat center/cover url('assets/projects/todolist.png')">
									<title>Angular To-Do App</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Angular To-Do Appr</h5>
									<p class="card-text">Simple To-Do list application made with Angular and NgRx</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
									<h5 class="card-title">Gif Search w/ Angular</h5>
									<p class="card-text">Simple application made with Angular to fetch GIFs online by keywords.</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
									<title>Crypto tracker</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Crypto tracker</h5>
									<p class="card-text">
										Application that fires push notifications to keep track of P2P prices of fiat currencies on Binance.
										Made with Angular 14, MongoDB, Websockets, RxJS, Material UI and NodeJS and Express in the back-end.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
									<title>Crypto tracker</title>
									<rect width="100%" height="100%" fill="none"></rect>
								</svg>

								<div class="card-body">
									<h5 class="card-title">Crypto tracker</h5>
									<p class="card-text">
										Application that fires push notifications to keep track of P2P prices of fiat currencies on Binance.
										Made with Angular 14, MongoDB, Websockets, RxJS, Material UI and NodeJS and Express in the back-end.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="d-flex justify-content-between" style="gap: 10px">
											<button type="button" class="btn btn-outline-danger">Go</button>
											<button type="button" class="btn btn-outline-secondary" stlye="margin-left: 200px">Source</button>
										</div>
										<!-- <small class="text-muted">9 mins</small> -->
									</div>
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
