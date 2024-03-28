const main = new Splide('.product__slider-main', {
  type: "loop",
  pagination: false,
  arrows: false,
});

const bar = main.root.querySelector('.my-carousel-progress-bar');

main.on( 'mounted move', () => {
  let end  = main.Components.Controller.getEnd() + 1;
  let rate = Math.min( ( main.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );


main.mount();