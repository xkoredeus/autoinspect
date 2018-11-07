$(document).ready(function(){
  //Табы Все виды автоэкспертиз
  $('.views__tabs-item').on('click', function(){
    $('.views__tabs-cnt-item').removeClass('active');
    $('.views__tabs-item').removeClass('active');
    $('.views__tabs-cnt-item[data-item="'+$(this).attr('data-item')+'"]').addClass('active');
    $(this).addClass('active');
  });
  //AOS Animate
  AOS.init({
   once: true,
   mirror: true,
   disable: 'phone'
  });
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
        responsive : {
          0   : {
              items: 1
          },
          380 : {
              items: 1
          },
          480 : {
              items: 2
          },
          768 : {
              items: 3
          }
        }
  });
  //Слайдер Сертификаты
  $('.cert__slider').owlCarousel({
        nav: true,
        dots: false,
        items: 6,
        loop: false,
        margin: 20,
        navText: ["<img src='img/arrow_prev.png'>", "<img src='img/arrow_next.png'>"],
        responsive : {
          0   : {
              items: 3
          },
          380 : {
              items: 3
          },
          480 : {
              items: 4
          },
          768 : {
              items: 5
          },
          1024 : {
              items: 6
          }
        }
  });
  //Плавная прокрутка
  $("body").on('click', 'a.anchor-href[href*="#"]', function(e){
    var fixed_offset = 30;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
  //Карта статистики ДТП
  var data_obj = {
    'ch':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Chukotka Autonomous Okrug
    'ka':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kamchatka Krai
    'ma':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Magadan Oblast
    'sa':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Sakha Republic
    'am':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Amur Oblast
    'pr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Primorsky Krai
    'eu':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Jewish Autonomous Oblast
    'ha':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Khabarovsk Krai
    'sh':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Sakhalin Oblast
    'om':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Omsk Oblast
    'nv':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Novosibirsk Oblast
    'al':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Altai Krai
    'lt':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Altai Republic
    'tv':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Tuva Republic
    'hk':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Khakassia
    'km':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kemerovo Oblast
    'tm':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Tomsk Oblast
    'zb':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Zabaykalsky Krai
    'br':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Buryat Republic
    'ir':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Irkutsk Oblast
    'kr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Krasnoyarsk Krai
    'ya':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Yamalo-Nenets Autonomous Okrug
    'ht':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Khanty–Mansi Autonomous Okrug
    'tu':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Tyumen Oblast
    'ku':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kurgan Oblast
    'cl':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Chelyabinsk Oblast
    'sv':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Sverdlovsk Oblast
    'ar':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Arkhangelsk Oblast
    'ne':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Nenets Autonomous Okrug
    'ko':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Komi Republic
    'mu':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Murmansk Oblast
    'vo':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Vologda Oblast
    'no':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Novgorod Oblast
    'ps':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Pskov Oblast
    'le':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Leningrad Oblast
    'kl':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Karelia
    'kn':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kaliningrad Oblast
    'da':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Dagestan
    'st':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Stavropol Krai
    'so':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of North Ossetia–Alania
    'kb':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kabardino-Balkar Republic
    'kh':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Karachay–Cherkess Republic
    'cc':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Chechen Republic
    'in':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Ingushetia
    'ad':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Adygea
    'ks':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Krasnodar Krai
    'ro':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Rostov Oblast
    'kk':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Kalmykia
    'as':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Astrakhan Oblast
    'vl':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Volgograd Oblast
    'tr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Tver Oblast
    'sm':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Smolensk Oblast
    'bn':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Bryansk Oblast
    'ky':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kursk Oblast
    'bl':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Belgorod Oblast
    'pr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Oryol Oblast
    'kj':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kaluga Oblast
    'tl':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Tula Oblast
    'lp':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Lipetsk Oblast
    'mc':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Moscow Oblast
    'rz':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Ryazan Oblast
    'tb':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Tambov Oblast
    'vm':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Vladimir Oblast
    'iv':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Ivanovo Oblast
    'yr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Yaroslavl Oblast
    'kt':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kostroma Oblast
    'nn':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Nizhny Novgorod Oblast
    'mr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Mordovia
    'pz':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Penza Oblast
    'sr':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Saratov Oblast
    'ss':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Samara Oblast
    'ob':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Orenburg Oblast
    'bs':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Bashkortostan
    'ul':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Ulyanovsk Oblast
    'cu':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Chuvash Republic
    'ta':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Republic of Tatarstan
    'ml':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Mari El Republic
    'ud':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Udmurt Republic
    'ki':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Kirov Oblast
    'pe':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Perm Krai
    'vn':  ['<table class="map-lable__table"><tr><td></td><td>Абсолютное значение</td><td>Сравнение с АППГ</td></tr><tr><td>ДТП</td><td>133</td><td>-13.6</td></tr><tr><td>Ранено</td><td>172</td><td>-11.3</td></tr>'], // Voronezh Oblast
  };  
  colorRegion  = '#fff'; // Цвет всех регионов
  focusRegion  = '#39be7c'; // Цвет подсветки регионов при наведении на объекты из списка
  selectRegion  = '#fff'; // Цвет изначально подсвеченных регионов 
  highlighted_states  = {};  
  // Массив подсвечиваемых регионов, указанных в массиве data_obj
  for(iso in data_obj){
      highlighted_states[iso]  = selectRegion;
  } 
  $('#vmap').vectorMap({
      map: 'russia',
      backgroundColor: 'transparent',
      borderColor:  '#000',
      borderWidth:  0.95,
      color: colorRegion,
      colors:  highlighted_states,
      hoverColors: focusRegion,
      hoverOpacity: null,
      enableZoom: true,
      showTooltip: true,
      //  Отображаем объекты если они есть
      onLabelShow:  function(event, label, code){
          name  = '<div class="map-lable__ttl">'+label.text()+'</div><br>';
          if(data_obj[code]){
              list_obj  = '<ul>';
              for(ob  in data_obj[code]){
                  list_obj  += '<li>'+data_obj[code][ob]+'</li>';
              }
              list_obj  += '</ul>';
          }else{
              list_obj  = '';
          }                                                             
          label.html(name  + list_obj);
          list_obj  = '';
      }
  });
  //Мобильное меню
  $(".header__hamburger").on('click',function() {
    $(this).toggleClass("active","slow");
    $('.header__nav').toggleClass("active");
    $('body').toggleClass("fixed");
  });
  //Закрываем AjaxForm popup после успешной отправки
  $(document).on('af_complete', function(event,res) {
    if(res.success) parent.$.fancybox.close();
  });

});