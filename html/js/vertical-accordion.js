// Author - Kevin Rosario Rodrigues.
// e: kevrodrigues116@gmail.com

// Free to use under The MIT License (MIT)

// secondary accordion menu with options - add accordion class to parent container for this to kick  in
var accordionSlider = (function () {

    var $childNav = $('.navigation.accordion ul li ul'),
        $navHeader = $('.navigation.accordion').find('ul:first > li'),
        $navLinks = $navHeader.filter('a'),
        $nestedChildren = $navHeader.children('ul'),
        defaults = {
            speed: 500,
            openMenu: false,
            nth: 1,
            headerLinks: false
        },
        options = {};
      
    function slider(initObj) {

        options = $.extend(defaults, initObj);

        $childNav.addClass('hidden-menu');

        if (options.openMenu === true) {
            $navHeader.eq(options.nth).addClass('expanded').find($childNav).removeClass('hidden-menu');
        } else if (options.openMenu === true) {
            $navHeader.eq(options.nth).addClass('expanded').find($childNav).removeClass('hidden-menu');
        }

        if (options.headerLinks === false && !$navHeader.hasClass('no-child')) {
            $navLinks.click(function (e) {
                e.preventDefault();
            });
        }

        // checks for child UL elements if non then removes the background arrow from the span element
        if ($nestedChildren.length > 1) {
            $navHeader.not('li:has(> ul)').addClass('no-child').find('span').css('background-image', 'none');
        }

        $navHeader.click(function (e) {
            if (!$(this).hasClass('expanded') && !$(this).hasClass('no-child')) {
                e.preventDefault();
            }

            if (options.headerLinks === false && $(this).hasClass('expanded')) {
                $(this).removeClass('expanded').find($childNav).slideUp(options.speed);
            } else {
                $(this).addClass('expanded').find($childNav).slideDown(options.speed);
                $(this).siblings(':not(expanded)').removeClass('expanded').find($childNav).slideUp(options.speed);
            }
        });
    }

    return {
        init: slider
    };

}());

accordionSlider.init({
    speed: 500,
    openMenu: true,    // set to true to keep menu open ('nth' option will need to be set after)
    nth: 1,             // choose which item to display as opened (0 based index)
    headerLinks: true  // true = "a tags are clickable"
});