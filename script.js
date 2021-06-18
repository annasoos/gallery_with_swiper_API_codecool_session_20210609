function _load() {

	const rootElement = document.getElementById("root");

	rootElement.insertAdjacentHTML("beforeend", `
		
		<div class="swiper-container gallery">

			<div class="swiper-wrapper"></div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

		</div>
	
	`);

	const images = ["cat_blue_eyes", "cat_petting", "cat_walking_field", "cat_walking_port", "cat_sleeping"];

	const targetSwiper = document.querySelector("#root .swiper-container.gallery .swiper-wrapper");

	for (const image of images) {

		console.log(image);

		const slide = `<div class="swiper-slide"><img src=${image}.jpg alt="${image}"/></div>`;

		targetSwiper.insertAdjacentHTML("beforeend", slide);

	};

	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

}

window.addEventListener("load", _load);