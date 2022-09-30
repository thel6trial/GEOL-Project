export default function SwiperModule() {
	// SLIDER COMMON
	function swiper(el) {
		const swiper = el.querySelector('.swiper-container');
		const nextBtn = el.querySelector('.swiper-button-next');
		const prevBtn = el.querySelector('.swiper-button-prev');
		const pagination = el.querySelector('.swiper-pagination');
		const isLoop = el.classList.contains('--loop') || false;
		const isAuto =
			(el.classList.contains('--auto') && {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			}) ||
			false;
		const space = +el.getAttribute('data-space-between') || 0;
		const slideBk = +el.getAttribute('data-breakpoint') || 1;
		const slidePerGroup = +el.getAttribute('data-per-group') || 1;
		// SET SLIDE FOR SWIPER FROM >=768
		const slideBk768 = +el.getAttribute('data-breakpoint-768') || 1;
		const slidePerGroup768 = +el.getAttribute('data-per-group-768') || 1;
		const slideBk992 = +el.getAttribute('data-breakpoint-992') || 1;
		const slidePerGroup992 = +el.getAttribute('data-per-group-992') || 1;
		const slideBk1200 = +el.getAttribute('data-breakpoint-1200') || 1;
		const slidePerGroup1200 = +el.getAttribute('data-per-group-1200') || 1;
		const swiper_common = new Swiper(swiper, {
			init: false,
			speed: 1200,
			// autoHeight: false,
			autoplay: isAuto,
			spaceBetween: space / 2,
			slidesPerView: slideBk,
			slidesPerGroup: slidePerGroup,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			pagination: {
				el: pagination,
				clickable: true,
			},
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
			loop: isLoop,
			breakpoints: {
				768: {
					spaceBetween: space,
					slidesPerView: slideBk768,
					slidesPerGroup: slidePerGroup768,
				},
				992: {
					spaceBetween: space,
					slidesPerView: slideBk992,
					slidesPerGroup: slidePerGroup992,
				},
				1200: {
					spaceBetween: space,
					slidesPerView: slideBk1200,
					slidesPerGroup: slidePerGroup1200,
				},
			},
			on: {
				init: function () {
					AOS.refresh();
					if (
						this.params.loop &&
						this.el.querySelectorAll('.swiper-slide .is-lightgallery').length
					) {
						$('.is-lightgallery').data('lightGallery').destroy(true);
						$('.is-lightgallery').lightGallery({
							thumbnail: true,
						});
					}
				},
			},
		});
		return swiper_common;
	}
	function runSwiperCommon(el) {
		$(el).each((_, s) => {
			try {
				const swp = swiper(s);
				swp.init();
			} catch (error) {
				console.log(error);
			}
		});
	}
	runSwiperCommon('.is-slider.is-slider-common');
	// SLIDER COMMON - END
	// SLIDER MOBILE
	function runSwiperMoblie(el) {
		if ($(window).width() > 991) return;
		$(el).each((_, s) => {
			try {
				const swp = swiper(s);
				swp.init();
			} catch (error) {
				console.log(error);
			}
		});
	}
	runSwiperMoblie('.is-slider.is-slider-mobile');
	// SLIDER MOBILE - END

	function bannerSlider(el) {
		const banner = document.querySelector('.banner .is-slider');
		if (!banner) return;
		const swiper = banner.querySelector('.swiper-container');
		const nextBtn = banner.querySelector('.swiper-button-next');
		const prevBtn = banner.querySelector('.swiper-button-prev');
		const pagination = banner.querySelector('.swiper-pagination');
		const isLoop = banner.classList.contains('--loop') || false;
		const isAuto =
			(banner.classList.contains('--auto') && {
				speed: 6000,
				delay: 2000,
				disableOnInteraction: false,
			}) ||
			false;
		const swiper_common = new Swiper(swiper, {
			speed: 1200,
			slidesPerView: 1,
			autoplay: isAuto,
			spaceBetween: 0,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			pagination: {
				el: pagination,
				clickable: true,
			},
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
			loop: isLoop,
			on: {
				init: function () {
					AOS.init();
				},
				slideChangeTransitionStart: function () {
					const currentIndex = this.params.loop
						? this.activeIndex
						: this.realIndex;
					const currentSlide = this.slides[currentIndex];
					$(currentSlide).find('.banner-wrap').removeClass('--active');
				},
				slideChangeTransitionEnd: function () {
					const currentIndex = this.params.loop
						? this.activeIndex
						: this.realIndex;
					const currentSlide = this.slides[currentIndex];
					$(currentSlide).find('.banner-wrap').addClass('--active');
				},
			},
		});
		console.log(swiper_common);
	}
	bannerSlider();
	// TEACHER SLIDER
	function teacherSlider() {
		const teacher = document.querySelector('.teacher-slider .is-slider');
		if (!teacher) return;
		const swiper = teacher.querySelector('.swiper-container');
		const nextBtn = teacher.querySelector('.swiper-button-next');
		const prevBtn = teacher.querySelector('.swiper-button-prev');
		const pagination = teacher.querySelector('.swiper-pagination');
		const isLoop = teacher.classList.contains('--loop') || false;
		const isAuto =
			(teacher.classList.contains('--auto') && {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			}) ||
			false;
		const swiper_common = new Swiper(swiper, {
			speed: 1200,
			centeredSlides: true,
			// effect: 'coverflow',
			// coverflowEffect: {
			//   depth: 150,
			//   modifier: 1,
			//   rotate: 0,
			//   slideShadows: false,
			//   stretch: -70,
			// },
			// autoHeight: false,
			slidesPerView: 5,
			autoplay: isAuto,
			spaceBetween: 0,
			watchSlidesProgress: true,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			pagination: {
				el: pagination,
				clickable: true,
			},
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
			loop: isLoop,
			breakpoints: {
				// 768: {
				//   spaceBetween: space,
				//   slidesPerView: slideBk768,
				//   slidesPerGroup: slidePerGroup768,
				// },
				// 992: {
				//   spaceBetween: space,
				//   slidesPerView: slideBk992,
				//   slidesPerGroup: slidePerGroup992,
				// },
				1200: {
					spaceBetween: 15,
					slidesPerView: 5,
				},
				992: {
					spaceBetween: 15,
					slidesPerView: 4,
				},
				600: {
					spaceBetween: 15,
					slidesPerView: 3,
				},
				320: {
					spaceBetween: 15,
					slidesPerView: 1,
				},
			},
			on: {
				init: function () {
					AOS.init();
				},
			},
		});
	}
	teacherSlider();
	// PRODUCT DETAIL
	function productDetail() {
		const thumbsContainer = document.querySelector(
			'.slider-detail-thumbs .swiper-container'
		);
		const mainContainer = document.querySelector(
			'.slider-detail .swiper-container'
		);
		if (!thumbsContainer && !mainContainer) return;
		const thumbsS = new Swiper(thumbsContainer, {
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			slidesPerView: 'auto',
			loop: false,
		});
		const mainS = new Swiper(mainContainer, {
			speed: 1200,
			autoplay: {
				delay: 5000,
			},
			slidesPerView: 'auto',
			navigation: {
				nextEl: $('.slider-detail .swiper-button-next'),
				prevEl: $('.slider-detail .swiper-button-prev'),
			},
			thumbs: {
				swiper: thumbsS,
			},
			loop: false,
		});
	}
	productDetail();
}
