//Tabs
$(document).ready(function () {
$(".tab-content__item").hide();
$(".tabs__container div.tab-content__item:first-child").show();
    $('ul.tabs__list > li').click(function () {
        if (!($(this).hasClass('active'))) {
            var thisLi = $(this);
            var numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
        }
    });
});
//Слайдер "Некоторые случаи"
$('.about__slider').owlCarousel({
      nav: true,
      dots: false,
      items: 1,
      loop: false,
      margin: 20,
      navText: ["<img src='img/arrow_prev.png'>", "<img src='img/arrow_next.png'>"],
});
//Слайдер "Калькулятора"
$('.calc__slider').owlCarousel({
      nav: true,
      dots: false,
      items: 1,
      loop: false,
      margin: 20,
      navText: ["<img src='img/arrow_prev.png'>", "<img src='img/arrow_next.png'>"],
});
//Слайдер Отзывов
$('.rev__slider').owlCarousel({
      nav: true,
      dots: false,
      items: 3,
      loop: false,
      margin: 20,
      navText: ["<img src='img/arrow_prev.png'>", "<img src='img/arrow_next.png'>"],
});
//Слайдер Сертификаты
$('.cert__slider').owlCarousel({
      nav: true,
      dots: false,
      items: 6,
      loop: false,
      margin: 20,
      navText: ["<img src='img/arrow_prev.png'>", "<img src='img/arrow_next.png'>"],
});