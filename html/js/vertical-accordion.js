// Author - Kevin Rosario Rodrigues.
// e: kevrodrigues116@gmail.com

// Free to use under The MIT License (MIT)

// secondary accordion menu with options - add accordion class to parent container for this to kick in.
var accordionSlider = (function () {

    var $childNav = $('.accordion ul li ul'),
        $navHeader = $('.accordion > ul > li'),
        $navLinks = $navHeader.find('a'),
        $nestedChildren = $navHeader.children('ul'),
        defaults = {
            speed: 500,
            openMenu: false,    // set to true to keep menu open ('nth' option will need to be set)
            nth: 1,             // choose which item to display as opened (0 based index)
            headerLinks: false  // true = "a tags are clickable"
        },
        options = {};
     
    function slider(initObj) {

        options = $.extend(defaults, initObj);

        $childNav.addClass('hidden-menu');

        if (options.openMenu === true) {
            $navHeader.eq(options.nth).addClass('expanded').find($childNav).removeClass('hidden-menu');
        } else if (!$navHeader.hasClass('home-link') && options.openMenu === true) {
            $navHeader.eq(options.nth).addClass('expanded').find($childNav).removeClass('hidden-menu');
        }

        if (options.headerLinks === false) {
            $navLinks.click(function (e) {
                e.preventDefault();
            });
        }

        // checks for child UL elements if non then removes the background arrow from the span element
        if ($nestedChildren.length > 1) {
            $navHeader.not('li:has(> ul)').find('span').css('background-image', 'none');
            console.log($nestedChildren);
        }

        $navHeader.click(function (e) {
            if (!$(this).hasClass('expanded')) {
                e.preventDefault();
            }
            $(this).addClass('expanded').find($childNav).slideDown(options.speed);
            $(this).siblings(':not(expanded)').removeClass('expanded').find($childNav).slideUp(options.speed);
        });
    }

    return {
        init: slider
    };

}());

accordionSlider.init({
    speed: 500,
    openMenu: false,
    nth: 0,
    headerLinks: false
});