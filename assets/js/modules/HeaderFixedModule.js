export default function MenuFixedModule() {
  if (document.querySelector('.header')) {
    /** MENU FIXED WHEN SCROLL */
    const header = document.querySelector('.header');
    const headerOffsetTop = header.offsetTop;
    const headerHeight = header.offsetHeight;
    // HEADER TOP
    const headerTop = document.querySelector('.header-top');
    const headerTopHeight = headerTop.offsetHeight;
    // HEADER BOTTOM
    // const headerBottom = document.querySelector('.header-bottom');
    // const headerBottomHeight = headerBottom.offsetHeight;
    const heightAdminBar =
      document.body.classList.contains('admin-bar') &&
        document.body.offsetWidth <= 600
        ? 46
        : 0;
    function checkHeaderFixed() {
      if (scrollY >= headerOffsetTop + headerHeight + heightAdminBar) {
        header.classList.add('--fixed');
        header.nextElementSibling.style.marginTop = `${headerHeight}px`;
      } else {
        header.classList.remove('--fixed');
        header.nextElementSibling.style.marginTop = 0;
      }
    }
    checkHeaderFixed();
    $(window).on('scroll', checkHeaderFixed);
    /** MENU FIXED WHEN SCROLL - END */
  }
}
