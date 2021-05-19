"use strict";

jQuery(function ($) {
  var $header = $('#js-header');
  var $masonryGrid = $('.js-masonry-grid');
  var $categoryItem = $('.js-category-item');
  var $tabpane = $('.category-content').find('.tab-pane');
  var $landingSlider = $('.js-landing-slider');
  var $categoryHeaderButton = $('.category-header-button');
  var $categorySidebarButton = $('.js-category-sidebar-icon');
  var $modalButton = $('.js-modal-button');
  var $modalClose = $('.js-modal-close');
  var controller = new ScrollMagic.Controller();
  var categoryCardContainer = $('.category-content-card');
  var $categorySubItem = $('.js-category-subitem');
  $landingSlider.slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $header.addClass('is-sticky');
    } else {
      $header.removeClass('is-sticky');
    }
  });
  $('.nav-tabs .nav-link').on('click', function (e) {
    var $this = $(this);
    $('.category-header-title').text($this.text());

    if ($(window).outerWidth() <= 768) {
      $('.category-header-nav').stop().slideUp();
      $categoryHeaderButton.removeClass('is-active');
    }
  });
  $categoryItem.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass('is-active')) {
      $categoryItem.removeClass('is-active');
      $this.addClass('is-active');
    } else {
      $this.removeClass('is-active');
    }

    if ($categoryItem.next('.js-category-subitem').is(":visible")) {
      $categoryItem.next('.js-category-subitem').slideUp();
    }

    $categorySubItem.find('a').removeClass('is-active');
    $this.next('.js-category-subitem').stop().slideToggle();
  });
  $categorySubItem.find('a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $categorySubItem.find('a').removeClass('is-active');
    $this.addClass('is-active');
  });
  $categoryHeaderButton.on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('is-active');
    $('.category-header-nav').stop().slideToggle();
  });
  $categorySidebarButton.on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('is-active');
    $this.next('.js-category-sidebar-navigation').stop().slideToggle();
  });
  $(window).on('resize', function () {
    if ($(window).outerWidth() > 768) {
      $categorySidebarButton.removeClass('is-active');
      $categoryHeaderButton.removeClass('is-active');
      $('.js-category-sidebar-navigation').removeAttr('style');
      $('.category-header-nav').removeAttr('style');
    }
  });
  $(window).on('load', function () {
    if ($(window).scrollTop() > 50) {
      $header.addClass('is-sticky');
    } else {
      $header.removeClass('is-sticky');
    }

    $('.js-modal-load-open').fadeIn(function () {
      $('.js-modal-load-open').css({
        'display': 'flex'
      });
      $('.js-modal-load-open').animate({
        'opacity': 1
      });
    });

    if ($(window).outerWidth() > 1024) {
      categoryCardContainer.each(function () {
        var $this = $(this);
        var $thisSidebarNavigation = $this.find('.js-category-sidebar-navigation');
        var scene = new ScrollMagic.Scene({
          triggerElement: $thisSidebarNavigation[0],
          offset: $header.outerHeight() * -1.5,
          triggerHook: 'onLeave',
          duration: 500
        }).setPin($thisSidebarNavigation[0]).addTo(controller);
      });
    }
  });
  $modalButton.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $target = $this.data('modal-target');
    $target = $($target);
    var iframeSource = $target.attr('data-iframe-src');
    $target.stop().fadeToggle(function () {
      if (typeof iframeSource !== 'undefined') {
        $target.find('iframe').attr("src", iframeSource + "?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=opaque&enablejsapi=1&controls=0");
      }

      $target.css({
        'display': 'flex'
      });
      $target.animate({
        'opacity': 1
      });
    });
  });
  $modalClose.on('click', function () {
    $('.js-modal').fadeOut();
    $('.js-modal').find('iframe').attr("src", null);
  });
  $(document).mouseup(function (e) {
    var container = $(".custom-modal-container");
    var nav = $('.navbar-nav');
    var categoryHeaderContainer = $('.category-header-nav');
    var $categorySidebarNavigation = $('.js-category-sidebar-navigation');

    if ($('.js-modal').is(':visible')) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.js-modal').fadeOut();
        $('.js-modal').find('iframe').attr("src", null);
      }
    }

    if ($('.navbar-collapse').hasClass('show')) {
      if (!nav.is(e.target) && nav.has(e.target).length === 0) {
        $("button.navbar-toggler").click();
      }
    } // if($(window).outerWidth() <= 768) {
    //     if($('.category-header-nav').is(':visible')) {
    //         if (!$categoryHeaderButton.is(e.target) && !categoryHeaderContainer.is(e.target) && categoryHeaderContainer.has(e.target).length === 0) {
    //             $categoryHeaderButton.click();
    //         }
    //     }
    // }


    if ($(window).outerWidth() <= 768) {
      if ($('.category-header-nav').is(':visible')) {
        if (!$categoryHeaderButton.is(e.target) && !categoryHeaderContainer.is(e.target) && categoryHeaderContainer.has(e.target).length === 0) {
          $categoryHeaderButton.click();
        }
      }

      if ($categorySidebarNavigation.is(':visible')) {
        if (!$categorySidebarButton.is(e.target) && !$categorySidebarNavigation.is(e.target) && $categorySidebarNavigation.has(e.target).length === 0) {
          $categorySidebarButton.click();
        }
      }
    }
  });
});