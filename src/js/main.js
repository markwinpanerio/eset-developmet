jQuery(function($) {
    const $header = $('#js-header');
    const $masonryGrid = $('.js-masonry-grid');
    const $categoryItem = $('.js-category-item');
    const $tabpane = $('.category-content').find('.tab-pane');
    const $landingSlider = $('.js-landing-slider');
    const $categoryHeaderButton = $('.category-header-button');
    const $categorySidebarButton = $('.js-category-sidebar-icon');
    const $modalButton = $('.js-modal-button');
    const $modalClose = $('.js-modal-close');

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

    $('.nav-tabs .nav-link').on('click', function(e) {
        const $this = $(this);
        
        $('.category-header-title').text($this.text());
        if($(window).outerWidth() <= 768) {
            $('.category-header-nav').stop().slideUp();
            $categoryHeaderButton.removeClass('is-active');
        }
    })

    $categoryItem.on('click', function(e) {
        e.preventDefault();
        const $this = $(this);
        $this.next('.js-category-subitem').stop().slideToggle();
        $this.toggleClass('is-active');
    })

    $categoryHeaderButton.on('click', function(e) {
        const $this = $(this);

        $this.toggleClass('is-active');
        $('.category-header-nav').stop().slideToggle();
    })

    $categorySidebarButton.on('click', function(e) {
        const $this = $(this);

        $this.toggleClass('is-active');
        $this.next('.js-category-sidebar-navigation').stop().slideToggle();
    })

    $(window).on('resize', function() {
        if($(window).outerWidth() > 768) {
            $categorySidebarButton.removeClass('is-active');
            $categoryHeaderButton.removeClass('is-active');
            $('.js-category-sidebar-navigation').removeAttr('style');
            $('.category-header-nav').removeAttr('style');
        }
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

        $('.js-modal-load-open').fadeIn(function() {
            $('.js-modal-load-open').css({
                'display' : 'flex'
            })

            $('.js-modal-load-open').animate({
                'opacity' : 1
            })
        });
    })

    $modalButton.on('click', function(e) {
        e.preventDefault();
        const $this = $(this);
        const $target = $this.data('modal-target');

        $($target).stop().fadeToggle(function() {
            $($target).css({
                'display' : 'flex'
            })

            $($target).animate({
                'opacity' : 1
            })
        });
    })

    $modalClose.on('click', function() {
        $('.js-modal').fadeOut();
    })

    $(document).mouseup(function(e) {
        const container = $(".custom-modal-container");
        const nav = $('.navbar-nav');
        const categoryHeaderContainer = $('.category-header-nav');
        const $categorySidebarNavigation = $('.js-category-sidebar-navigation');
    
        if($('.js-modal').is(':visible')) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.js-modal').fadeOut();
            }
        }

        if($('.navbar-collapse').hasClass('show')) {
            if (!nav.is(e.target) && nav.has(e.target).length === 0) {
                $("button.navbar-toggler").click();
            }
        }

        if($(window).outerWidth() <= 768) {
            if($('.category-header-nav').is(':visible')) {
                if (!categoryHeaderContainer.is(e.target) && categoryHeaderContainer.has(e.target).length === 0) {
                    $categoryHeaderButton.click();
                }
            }
        }

        if($(window).outerWidth() <= 768) {
            if($('.category-header-nav').is(':visible')) {
                if (!categoryHeaderContainer.is(e.target) && categoryHeaderContainer.has(e.target).length === 0) {
                    $categoryHeaderButton.removeClass('is-active');
                    $('.category-header-nav').slideUp();
                }
            }

            if($categorySidebarNavigation.is(':visible')) {
                if (!$categorySidebarNavigation.is(e.target) && $categorySidebarNavigation.has(e.target).length === 0) {
                    $categorySidebarButton.click();
                }
            }
        }
    });
})