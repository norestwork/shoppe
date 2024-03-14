$('.shop__range').slider({
  range: true,
  min: 0,
  max: 180,
  step: 5,
  values: [10, 180],
  slide: () => {
    let values = $( ".shop__range" ).slider( "values" );
    $('.shop__subrange').html('Price: $' + values[0] + ' - $' + values[1]);
  },
  change: () => {
    let values = $( ".shop__range" ).slider( "values" );
    $('.shop__subrange').html('Price: $' + values[0] + ' - $' + values[1]);
  }
});

$('.shop__filter-title').on('click', () => {
  $('.shop__filter-inner').slideToggle(400)
})