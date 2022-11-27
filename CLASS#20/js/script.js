$(function () {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });

  new VenoBox({
    selector: ".my-image-links",
    numeration: true,
    infinigall: true,
    share: true,
    spinner: "rotating-plane",
  });

  new VenoBox({
    selector: '.my-video-links',
  });


  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  $('.mycounter').counterUp({
    delay: 10,
    time: 1000
  });




  $('.slider_part').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


});
