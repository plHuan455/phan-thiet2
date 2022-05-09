const settings = () => ({
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        centerMode: true,
        className: 'center',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '40',
        dots: false,
        arrows: false,
      },
    },
  ],
});

export default settings;
