$('.account__sign-in').show();

$('#account__tab-sign-in').on('click', () => {
  $('.account__register').hide();
  $('.account__sign-in').show();
});

$('#account__tab-register').on('click', () => {
  $('.account__sign-in').hide();
  $('.account__register').show();
})