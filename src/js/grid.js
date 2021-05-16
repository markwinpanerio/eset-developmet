jQuery(function($) {
    const $masonryGrid = $('.js-masonry-grid');

    if($masonryGrid.length > 0) {
        $masonryGrid.each(function(e, masonryGrid) {
            const $this = $(masonryGrid);
            const flag = e + 1;

            $this.isotope({
                // options
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true,
            });

            $('.nav-tabs').on('click', function(){
                setTimeout(function() {
                    $this.isotope('layout');
                }, 300)
            })

            //append load more button
            $this.after('<div class="grid-loadmore"> <button class="js-load-more btn btn-primary"> Load More</button></div>');
            var initShow = 9; //number of items loaded on init & onclick load more button
            var counter = 3; //counter for load more button

            loadMore(initShow, $this); //execute function onload



            $(".js-load-more").on('click', function() {
                counter = counter + initShow;
                const $this = $(this);
                const parentGrid = $this.parent('.grid-loadmore').prev('.js-masonry-grid')
                loadMore(counter, parentGrid);
            });
        })

        function loadMore(toShow, container) {
            container.find(".hidden").removeClass("hidden");
            var iso = container.data('isotope'); // get Isotope instance
            var toDisplay = toShow;

            var hiddenElems = iso.filteredItems.slice(toDisplay, iso.filteredItems.length).map(function(item) {
                return item.element;
            });
            $(hiddenElems).addClass('hidden');
            container.isotope('layout');

            //when no more to load, hide show more button
            if (hiddenElems.length == 0) {
                container.next(".grid-loadmore").fadeOut();
            } else {
                container.next(".grid-loadmore").fadeIn();
            };
        }
    }
})