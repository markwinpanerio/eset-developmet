jQuery(function($) {
    const $header = $('#js-header');
    const $masonryGrid = $('.js-masonry-grid');
    const $categoryItem = $('.js-category-item');
    const $tabpane = $('.category-content').find('.tab-pane');
    const $landingSlider = $('.js-landing-slider');

    $(window).on('scroll', function() {
        if($(window).scrollTop() > 50) {
            $header.addClass('is-sticky');
        } else {
            $header.removeClass('is-sticky');
        }
    })

    if($masonryGrid.length > 0) {
        $masonryGrid.each(function(e) {
            const $this = $(this);
            let msnry = new Masonry( $this[0], {
                // options
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        })
    }

    const updateMasonry = function(){
        $masonryGrid.each(function(e) {
            const $this = $(this);
            let msnry = new Masonry( $this[0], {
                // options
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true,
            });
        })
    }

    $('.nav-tabs').on('click', function(){
        setTimeout(updateMasonry, 200)
    })

    $categoryItem.on('click', function(e) {
        e.preventDefault();
        const $this = $(this);
        $this.next('.js-category-subitem').stop().slideToggle();
        $this.toggleClass('is-active');
    })

    $(window).on('load', function() {
        if($(window).scrollTop() > 50) {
            $header.addClass('is-sticky');
        } else {
            $header.removeClass('is-sticky');
        }

        $landingSlider.slick({
            arrows: false,
            dots: true
        });
    })
})