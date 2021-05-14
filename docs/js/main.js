"use strict";

jQuery(function ($) {
  var $header = $('#js-header');
  var $masonryGrid = $('.js-masonry-grid');
  var $categoryItem = $('.js-category-item');
  var $tabpane = $('.category-content').find('.tab-pane');
  var $landingSlider = $('.js-landing-slider');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $header.addClass('is-sticky');
    } else {
      $header.removeClass('is-sticky');
    }
  });

  if ($masonryGrid.length > 0) {
    $masonryGrid.each(function (e) {
      var $this = $(this);
      var msnry = new Masonry($this[0], {
        // options
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
      });
    });
  }

  var updateMasonry = function updateMasonry() {
    $masonryGrid.each(function (e) {
      var $this = $(this);
      var msnry = new Masonry($this[0], {
        // options
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
      });
    });
  };

  $('.nav-tabs').on('click', function () {
    setTimeout(updateMasonry, 200);
  });
  $categoryItem.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next('.js-category-subitem').stop().slideToggle();
    $this.toggleClass('is-active');
  });
  $(window).on('load', function () {
    if ($(window).scrollTop() > 50) {
      $header.addClass('is-sticky');
    } else {
      $header.removeClass('is-sticky');
    }

    $landingSlider.slick({
      arrows: false,
      dots: true
    });
  });
});