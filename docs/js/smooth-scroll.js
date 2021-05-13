"use strict";

jQuery(function ($) {
  var HEADER_HEIGHT = $('#js-header').outerHeight();
  ;
  var $document = $(document);

  function mStopOn() {
    $document.on('DOMMouseScroll', preventDefault);
    $document.on('mousewheel', preventDefault);
  }

  ;

  function mStopOff() {
    $document.off('DOMMouseScroll', preventDefault);
    $document.off('mousewheel', preventDefault);
  }

  ;

  function preventDefault(event) {
    event.preventDefault();
  }

  ;

  function handleClick(e) {
    if (!$(e.currentTarget).hasClass('nolink')) {
      var id = $(e.currentTarget).attr('href'),
          target = $(id).offset().top;
      mStopOn();
      $('html, body').animate({
        scrollTop: target - HEADER_HEIGHT
      }, mStopOff);
      e.preventDefault();
    }
  }

  ;
  $('a.js-scroll').on('click', handleClick);
});