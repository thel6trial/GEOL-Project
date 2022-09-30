  $(document).ready(function () {  
  $('.main-course .tab-item').click(function () {
    var data = $(this).data('tab');

    console.log({ data })
    
    $('.section-pricing .row').removeClass('active').slideUp(0);
    $('.section-pricing .pricing--' + data).addClass('active').slideDown(300);
  })
});
  