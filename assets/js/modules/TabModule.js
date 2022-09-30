export default function TabModule() {
  /** TAB */
  $(document).on('click', (e) => {
    if (e.target.closest('.tab-link')) {
      const tabLink = e.target.closest('.tab-link');
      if (e.target.closest('.course-program-list')) {
        // ADD ACTIVE TO FIRST COLUMN
        $(tabLink).parents('.pr').siblings().find('.tt').removeClass('--active')
        $(tabLink).parents('.sub-tt').prev().addClass('--active')
        //  REMOVE ACTIVE OTHER TABS
        $(tabLink)
          .parents('.course-program-list')
          .find('.tab-link')
          .removeClass('--active')
      }
      // ADD ACTIVE TO SIBLINGS TABS
      $(tabLink).addClass('--active').siblings().removeClass('--active');
      // FIND TAB CONTENT
      const tabContent = $(tabLink.getAttribute('data-tabs'));
      $(tabContent)
        .addClass('--active')
        .siblings()
        .removeClass('--active');
    }
  });
  /** TAB - END */
  /** CATEGORY SEE MORE BUTTON  */
  if ($('.tabs__see-more').length) {
    $('.tabs__see-more').on('click', function () {
      $(this).prev().toggleClass('--show');
    });
  }
  /** CATEGORY SEE MORE BUTTON -  END */

  if ($('.course-danhmuc').length) {
    $('.course-danhmuc').click(function (e) {
      e.preventDefault();
      $(this).next().slideToggle();
    });
  }
  const tab1 = $('.course-tab .tab-item')
  const pane1 = $('.course-content >.panel-item')
  const tab2 = $('.tab-content .tab-item')
  const pane2 = $('.panel-content >.panel-item')
  if (tab1.length) {

    $.each(tab1, function (indexInArray, valueOfElement) {
      const pane = pane1[indexInArray];
      var link;
      $(this).click(function () {

        $(this).siblings().removeClass('active')
        $(this).addClass('active')

        $(pane).siblings().removeClass('active')
        $(pane).addClass('active')
      });
    });
  }
  if (tab2.length) {

    $.each(tab2, function (indexInArray, valueOfElement) {
      const pane = pane2[indexInArray];
      var link;
      $(this).click(function () {
        link = $(this).data('cate_link')

        $(this).siblings().removeClass('active')
        $(this).addClass('active')

        $(pane).siblings().removeClass('active')
        $(pane).addClass('active')
      });
    });
  }
}
