var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var doc = $(document);
var vh = $(window).height();

var openMenu = function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav__list--active');
};


var scrollFx = function () {
    var ds = doc.scrollTop();
    var of = vh / 4;

    // if the panel is in the viewport, reveal the content, if not, hide it.
    for (var i = 0; i < panel.length; i++) {
        if (panel.eq(i).offset().top < ds + of) {
            panel
                .eq(i)
                .find('.panel__content')
                .addClass('panel__content--active');
        } else {
            panel
                .eq(i)
                .find('.panel__content')
                .removeClass('panel__content--active')
        }
    }
};

var init = function () {
    burger.addEventListener('click', openMenu, false);
    window.addEventListener('load', scrollFx, false);
};

doc.on('ready', init);