$('.shop__range').slider({
  range: true,
  min: 0,
  max: 180,
  step: 5,
  values: [10, 180],
  slide: (event, ui) => {
    $('.shop__subrange').html('Price: $' + ui.values[0] + ' - $' + ui.values[1]);
  },
  change: (event, ui) => {
    $('.shop__subrange').html('Price: $' + ui.values[0] + ' - $' + ui.values[1]);
  },
});

$('.shop__filter-title').on('click', () => {
  $('.shop__filter-inner').slideToggle(400)
})