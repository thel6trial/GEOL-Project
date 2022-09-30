export default function ScrollToSectionModule() {
  const speed = 800;
  // NẾU CÓ ĐỊA CHỈ ID TRÊN THANH URL THÌ SCROLL XUỐNG
  const hash = window.location.hash;
  if ($(hash).length) scrollToID(hash, speed);
  // TÌM ĐỊA CHỈ ID VÀ SCROLL XUỐNG NẾU CÓ CLASS
  $('.custom-scroll').on('click', function (e) {
    e.preventDefault();
    const href = $(this).find('> a').attr('href') || $(this).attr('data-href');
    const id = href.slice(href.lastIndexOf('#'));
    if ($(id).length) {
      scrollToID(id, speed);
    } else {
      // window.location.replace(`/${id}`);
      window.location.href = href;
    }
  });
  // HÀM SCROLL CHO MƯỢT MÀ
  function scrollToID(id, speed) {
    const offSet = $('.header-bottom').outerHeight() + 10;
    const section = $(id).offset();
    const targetOffset = section.top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
  }


  $(document).on('scroll', function () {
    const fromTop = $(this).scrollTop();
    $('.course-dt-cate li').each((idx, li) => {
      const href = $(li).attr('data-href');
      const $target = $(href);
      const offsetTop = $target.offset().top;
      const outerHeight = $target.outerHeight();
      const headerHeight = $('.header-bottom').outerHeight()
      if (offsetTop <= fromTop + headerHeight + 12 && offsetTop + outerHeight > fromTop) {
        $(li).addClass("--active").siblings().removeClass('--active');
      }
    })
  })
}
