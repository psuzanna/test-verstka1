$(function () {

  /*left mobile bar ----*/
  $('.left-toolbar-trigger').on('click', function (e) {
    e.preventDefault();

    $('.left-toolbar').toggleClass('active');
    $('body').toggleClass('toolbar-opened');

  });

  $('.left-toolbar-overlay').on('click', function (e) {
    e.preventDefault();
    $('.left-toolbar').toggleClass('active');
    $('body').toggleClass('toolbar-opened');
  });

  $('.left-toolbar__close').on('click', function (e) {
    e.preventDefault();
    $('.left-toolbar').toggleClass('active');
    $('body').toggleClass('toolbar-opened');
  });


  /*--------Swiper slider --------*/
  const swiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /*-------- Form Ajax ----------*/
  $("#reserve-table__form").on("submit", function () {
    let data = $(this).serialize()

    $.ajax({
      url: '/',
      method: 'post',
      dataType: 'html',
      data: data,
      success: function (data) {
        console.dir(data)
        $(this).html('<h4>We are connect with you</h4>')
      },
      error: function (jqXHR, exception) {
        if (jqXHR.status === 0) {
          alert('Not connect. Verify Network.')
        } else if (jqXHR.status == 404) {
          alert('Requested page not found (404).')
        } else if (jqXHR.status == 500) {
          alert('Internal Server Error (500).')
        } else {
          alert('Uncaught Error. ' + jqXHR.responseText)
        }
      }
    });


  })



})