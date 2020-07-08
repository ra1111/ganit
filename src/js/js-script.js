var hamburgerBtn = document.querySelector('.header__hamburger');

// $("body").toggleClass("overflow"), //yes
// $("body").hasClass("internal") && ($(this).toggleClass("internal"),
//     $(".header__logo img").toggleClass("hide")),
//     $(this).toggleClass("open"), //yes
//     $(".header__wrapper header, .mob-overlay").toggleClass("open")
// }

hamburgerBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('overflow');
    // document.querySelector('body').classList.toggle('internal');
    // document.querySelector('.header__logo img').classList.toggle('hide');
    // document.querySelector('.header__logo img').classList.toggle('open');
    document.querySelector('.header__wrapper header').classList.toggle('open');
    document.querySelector('.mob-overlay').classList.toggle('open');
    e.currentTarget.classList.toggle('open');
});