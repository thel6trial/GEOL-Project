export default function CourseModule() {
  $('.course-program-btn-mobile').on('click', () => {
    $('.course-program-list .wrap').toggleClass('--active')
  })
  $('.course-dt-cate-mobile .wrap').on('click', function () {
    $('.course-dt-cate').toggleClass('--active')
    const offsetTopParent = $('.course-dt-wrap').offset().top;
    const offsetTop = $(this).offset().top;
    console.log(offsetTopParent, offsetTop);
    $('.course-dt-cate').css('top', offsetTop - offsetTopParent)

  })
  $(document).on('click', (e) => {
    if (!e.target.closest('.course-program-list ')) {
      $('.course-program-list .wrap').removeClass('--active')

    }
  })
  $(document).on('scroll', () => {
    $('.course-dt-cate').removeClass('--active')
  })
}