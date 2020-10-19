(function ($) {
	'use strict'
	$(window).on('load resize', function () {
	})
	$(document).ready(function () {
		// object fit
		objectFitImages()
		// scroll to id
		function scrollToId() {
			var scroll = $('a.main-menu__link--scroll')
			if(!scroll.length) return
			scroll.mPageScroll2id({
				highlightClass: 'main-menu__link--highlighted',
			})
		}
		scrollToId()
		// header bar
		$(window).on('scroll', function () {
			const lower = $('.header-common .header__lower')
			const scroll = $(window).scrollTop()
			if (scroll >= 1) {
				lower.addClass('header__lower--fixed')
			}
			else {
				lower.removeClass('header__lower--fixed')
			}
		})
		// scroll to id
		function scrollTo () {
			const scrollTo = $('a.anchor[href^="#"]')
			if (!scrollTo.length) return
			scrollTo.on("click", function (e) {
				const anchor = $(this)
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
				}, 600)
				e.preventDefault()
			})
		}
		scrollTo()
		// video trigger
		function videoTrigger() {
			const trigger = $('.video-trigger')
			if (!trigger.length) return
			trigger.fancybox()
		}
		videoTrigger()
		// video trigger
		function photoTrigger() {
			const trigger = $('.photo-trigger')
			if (!trigger.length) return
			trigger.fancybox()
		}
		photoTrigger()
		// masonry gallery
		function masonryGallery() {
			const masonryGallery = $('.gallery-masonry')
			if (!masonryGallery.length) return
			masonryGallery.isotope({
				itemSelector: '.gallery-masonry__item',
				percentPosition: true,
			})
			const filter = $('.filter-panel__item')
			filter.on('click', function () {
				const filterValue = $(this).attr('data-filter')
				masonryGallery.isotope({
					filter: filterValue ,
				})
			})
			filter.on('click', function () {
				filter.removeClass('filter-panel__item--active')
				$(this).addClass('filter-panel__item--active')
			})
		}
		masonryGallery()
		// SLIDERS
		// donations slider
		function donationSlider() {
			const slider = $('.donation-slider')
			if (!slider.length) return
			slider.slick({
				slidesToShow: 2,
				arrows: false,
				dots: true,
				infinite: false,
				appendDots: $('.donation-slider__dots'),
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]
			})
		}
		donationSlider()
	})
}(jQuery))