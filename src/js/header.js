$('.header__nav-icon-search').on('click', () => {
  $('.header__bottom-form').slideToggle(200);
})

$('.header__nav-icon-burger').on('click', () => {
  $('body,html').animate({scrollTop: 0}, 100);
  $('.header__nav-bottom').slideToggle(200);
  $('body').toggleClass('body--hidden');
  $('.header__nav-icon-burger').toggleClass('cross');

  burgerIcon();
})

$('.header__nav-bottom').on('click', () => {
  $('.header__nav-bottom').slideToggle(200);
  $('body').toggleClass('body--hidden');
  $('.header__nav-icon-burger').toggleClass('cross');

  burgerIcon();
})

const burgerIcon = () => {
  if(!$('.header__nav-icon-burger').hasClass('cross')) {
    $('.header__nav-icon-burger button').html('<img src="./../img/icons/burger-icon.svg" alt="Burger Icon">')
  } else {
    $('.header__nav-icon-burger button').html('<img src="./../img/icons/cross-icon.svg" alt="Cross Icon">')
  }
}