// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     touchDrag: true,
//     margin: 10,
//     dots: true,
//     autoHeight: true,
//   });
// });

const splide = new Splide('.splide', {
  perPage: 1,
  start: 1,
  padding: {left: -10, right: -10},
  type: 'loop',
  label: 'Products',
  speed: 600,
  arrows: false,
  pagination: true,
  gap: '10px',
})

splide.mount();