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

			.fa:hover {
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
						<strong>Keep learning.</strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum cursus nibh eget mollis. Mauris
						accumsan dolor in quam finibus, eu hendrerit ipsum bibendum. Cras pulvinar dui eget tristique vulputate. Donec ex enim, ornare non accumsan nec,
						facilisis at est. Curabitur congue dolor lacus, a hendrerit eros vestibulum et. Nam porta nisl eget odio lobortis egestas. Pellentesque sed varius
						leo. Nulla non malesuada est.
					</p>
				</div>
				<div class="info-card-inverted">
					<h4>Where I want to be next?</h4>
					<p>
						<strong>In the pursuit of perfection</strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum cursus nibh eget mollis.
						Mauris accumsan dolor in quam finibus, eu hendrerit ipsum bibendum. Cras pulvinar dui eget tristique vulputate. Donec ex enim, ornare non accumsan
						nec, facilisis at est. Curabitur congue dolor lacus, a hendrerit eros vestibulum et. Nam porta nisl eget odio lobortis egestas. Pellentesque sed
						varius leo. Nulla non malesuada est.
					</p>
					<i class="fa fa fa-route"></i>
				</div>
				<div class="info-card">
					<i class="fa fa-graduation-cap"></i>
					<h4>What I've learnt so far?</h4>
					<p>
						<strong>Keep learning. Always.</strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum cursus nibh eget mollis.
						Mauris accumsan dolor in quam finibus, eu hendrerit ipsum bibendum. Cras pulvinar dui eget tristique vulputate. Donec ex enim, ornare non accumsan
						nec, facilisis at est. Curabitur congue dolor lacus, a hendrerit eros vestibulum et. Nam porta nisl eget odio lobortis egestas. Pellentesque sed
						varius leo. Nulla non malesuada est.
					</p>
				</div>

				<div class="info-card-inverted">
					<h4>What I'm focusing on now?</h4>
					<p>
						<strong>Getting better, one step at a time.</strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum cursus nibh eget mollis.
						Mauris accumsan dolor in quam finibus, eu hendrerit ipsum bibendum. Cras pulvinar dui eget tristique vulputate. Donec ex enim, ornare non accumsan
						nec, facilisis at est. Curabitur congue dolor lacus, a hendrerit eros vestibulum et. Nam porta nisl eget odio lobortis egestas. Pellentesque sed
						varius leo. Nulla non malesuada est.
					</p>
					<i class="fa fa-sharp fa-solid fa-book-open-reader"></i>
				</div>

				<div class="info-card">
					<i class="fa fa fa-heart"></i>
					<h4>What keeps me moving?</h4>
					<p>
						<strong>The main reasons.</strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum cursus nibh eget mollis.
						Mauris accumsan dolor in quam finibus, eu hendrerit ipsum bibendum. Cras pulvinar dui eget tristique vulputate. Donec ex enim, ornare non accumsan
						nec, facilisis at est. Curabitur congue dolor lacus, a hendrerit eros vestibulum et. Nam porta nisl eget odio lobortis egestas. Pellentesque sed
						varius leo. Nulla non malesuada est.
					</p>
				</div>
				<!-- 				
				<div class="info-card-inverted">
					<h4>What do I write about, exactly?</h4>
					<p>
						<strong>Building a better life.</strong><br />I'm a firm believer that constantly pushing outside of the comfort zone leads to great opportunities
						and growth, and I'm deeply interested in following a path that defies the status quo. I share some of the things I've learnt in the process of
						searching for the next new adventure, new skill to learn or new set of improvements that results in a more positive and balanced way to spend time
						on this earth.
					</p>

				</div> -->
				<!-- <div class="info-card">
					<i class="fa fa-graduation-cap"></i>
					<h4>What do I write about, exactly?</h4>
					<p>
						<strong>Building a better life.</strong><br />I'm a firm believer that constantly pushing outside of the comfort zone leads to great opportunities
						and growth, and I'm deeply interested in following a path that defies the status quo. I share some of the things I've learnt in the process of
						searching for the next new adventure, new skill to learn or new set of improvements that results in a more positive and balanced way to spend time
						on this earth.
					</p>
				</div>
				<div class="info-card">
					<i class="fa fa fa-heart"></i>
					<h4>What do I write about, exactly?</h4>
					<p>
						<strong>Building a better life.</strong><br />I'm a firm believer that constantly pushing outside of the comfort zone leads to great opportunities
						and growth, and I'm deeply interested in following a path that defies the status quo. I share some of the things I've learnt in the process of
						searching for the next new adventure, new skill to learn or new set of improvements that results in a more positive and balanced way to spend time
						on this earth.
					</p>
				</div>
				<div class="info-card">
				<i class="fa-brands fa fa-angular"></i>
					<h4>What do I write about, exactly?</h4>
					<p>
						<strong>Building a better life.</strong><br />I'm a firm believer that constantly pushing outside of the comfort zone leads to great opportunities
						and growth, and I'm deeply interested in following a path that defies the status quo. I share some of the things I've learnt in the process of
						searching for the next new adventure, new skill to learn or new set of improvements that results in a more positive and balanced way to spend time
						on this earth.
					</p>
				</div>
				<div class="info-card-inverted">
					<h4>What do I write about, exactly?</h4>
					<p>
						<strong>Building a better life.</strong><br />I'm a firm believer that constantly pushing outside of the comfort zone leads to great opportunities
						and growth, and I'm deeply interested in following a path that defies the status quo. I share some of the things I've learnt in the process of
						searching for the next new adventure, new skill to learn or new set of improvements that results in a more positive and balanced way to spend time
						on this earth.
					</p>
					<i class="fa fa fa-heart"></i>
				</div>
				<div class="info-card">
					<img src="https://kymellis.co/content/images/size/w1000/2022/04/DJI_0374.JPG" style="width: 150px; height:150px" />
					<h4>What do I write about, exactly?</h4>
					<p>
						<strong>Building a better life.</strong><br />I'm a firm believer that constantly pushing outside of the comfort zone leads to great opportunities
						and growth, and I'm deeply interested in following a path that defies the status quo. I share some of the things I've learnt in the process of
						searching for the next new adventure, new skill to learn or new set of improvements that results in a more positive and balanced way to spend time
						on this earth.
					</p>
				</div> -->
			</div>
		</div>
	`,
})
export class AboutComponent {}
