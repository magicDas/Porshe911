$(document).ready(function() {

    $(".search").click(function() {
        $(".search-field, .input").toggleClass("active");
        $("input[type='text']").focus();
    });

    $(".btn").click(function() {
        $(".content_block").toggleClass('hide');
        return false;
    });

    $(".nav_pages a").click(function() {
        $(".nav_pages a").removeClass('light');
        $(this).toggleClass("light");
    });

    let viewport = $("#viewport").width(); 
    let slider = $("div.pic-slider"); 
    let viewSliders = $(".viewSlide"); 
    let viewImages = $(".viewSlide img");
    let viewSlide = 2; 
    let viewImage = 0;
    viewSliders[viewSlide].style.borderTop = "15px solid #FF4800";
    viewImages[viewSlide].style.marginTop = "-15px";
    $(".next").click(function() {
        viewSliders[viewSlide].style.borderTop = "0px";
        viewImages[viewSlide].style.marginTop = "0px";
        if (viewSlide < 2) {
            viewSlide++;
        } else {
            viewSlide = 0;
        }
        viewSliders[viewSlide].style.borderTop = "15px solid #FF4800";
        viewImages[viewSlide].style.marginTop = "-15px";
        slider.animate({ 'left': -viewSlide * viewport + "px" }, { 'duration': 500 })
    });
    $(".prev").click(function() {
        viewSliders[viewSlide].style.borderTop = "0px";
        viewImages[viewSlide].style.marginTop = "0px";
        if (viewSlide > 0) {
            viewSlide--;
        } else {
            viewSlide = 2;
        }
        viewSliders[viewSlide].style.borderTop = "15px solid #FF4800";
        viewImages[viewSlide].style.marginTop = "-15px";
        slider.animate({ 'left': -viewSlide * viewport + "px" }, { 'duration': 500 })
    });

    $(function() {
        function init() {
            $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
            $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
        };

        function toggleMenuIcon() {
            $(this).toggleClass('menu-icon--open');
            $('[data-element="toggle-nav"]').toggleClass('nav--active');
        };

        function toggleSubMenu() {
            $(this).toggleClass('nav__link--plus nav__link--minus');
            $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
        };

        init()
    });

});