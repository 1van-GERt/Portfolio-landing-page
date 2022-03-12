function scroll_active() {


        var window_top = $(window).scrollTop();

        var body_top = $('body[id="body"]').offset().top;
        var aboutMe_top = $('div[id="aboutMe"]').offset().top -10;
        var skills_top = $('div[id="skills"]').offset().top -10;
        var portfolio_top = $('div[id="portfolio"]').offset().top -10;

        var contacts_top = $('div[id="contacts"]').offset().top -  $(window).height() + 180;

         if (window_top > contacts_top) {
                $(".right__nav__item").removeClass("active");
                $('a[href="#contacts"]').addClass("active");
                }

        else if (window_top > portfolio_top) {
                $(".right__nav__item").removeClass("active");
                $('a[href="#portfolio"]').addClass("active");
                }

         else if (window_top > skills_top) {
                $(".right__nav__item").removeClass("active");
                $('a[href="#skills"]').addClass("active");
                }

        else if (window_top > aboutMe_top) {
                $(".right__nav__item").removeClass("active");
                $('a[href="#aboutMe"]').addClass("active");
        }

        else {
                $(".right__nav__item").removeClass("active");
                $('a[href="#body"]').addClass("active");

                }

}

jQuery(function()

{

        jQuery(window).scroll(scroll_active);

});