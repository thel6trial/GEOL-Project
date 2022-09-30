export default function MfpModule() {
  /** DISABLE SCROLL WHEN OPEN POPUP */
  function toggleBodyScroll(disable) {
    if (!window.tempScrollTop) {
      window.tempScrollTop = window.pageYOffset;
      // save the current position in a global variable so I can access again later
    }
    if (disable) {
      document.body.classList.add('stop-scrolling-mobile');
      document.body.style.top = `-${window.tempScrollTop}px`;
    } else {
      document.body.classList.remove('stop-scrolling-mobile');
      document.body.style.top = `0px`;
      window.scrollTo({ top: window.tempScrollTop });
      window.tempScrollTop = 0;
    }
  }
  /** DISABLE SCROLL WHEN OPEN POPUP - END */
  /** MAGNIFICPOPUP */
  $(document).on('click', '.open-popup-btn', function (e) {
    e.preventDefault();
    // disableScrolling()
    toggleBodyScroll(true)
    const link = $(this).attr('href') || $(this).attr('data-mfp-src');
    const $type = $(this).attr('type') || 'inline';

    $.magnificPopup.open({
      items: {
        src: link,
      },
      type: $type,
      mainClass: 'mfp-zoom-in',
      modal: false, // CLOSE POPUP WHEN CLICK OUTSIDE
      midClick: true,
      removalDelay: 500, // DELAY BEFORE CLOSE POPUP
      preloader: false,
      fixedBgPos: true, // SET HEIGHT BACKGROUND FIX WITH CONTENT
      fixedContentPos: false, // FIXED CONTENT AT CLICKED POSITION
      callbacks: {
        open: function () {
          $('html').addClass('add-space-scroll');
          $('body').addClass('stop-scrolling-mobile');
        },
        close: function () {
          $('html').removeClass('add-space-scroll');
          $('body').removeClass('stop-scrolling-mobile');
          toggleBodyScroll(false)

        },
      },
    });
  });
  $(document).on('click', '.video-popup, .video-btn', function (e) {
    e.preventDefault();
    const link =
      $(this).attr('href') ||
      $(this).attr('data-mfp-src') ||
      'https://www.youtube.com/watch?v=C3QKB74zaD8';
    $.magnificPopup.open({
      items: {
        src: link,
        type: 'iframe',
      },
      mainClass: 'mfp-zoom-in mfp-video',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      callbacks: {
        open: function () {
          $('html').addClass('add-space-scroll');
          $('body').addClass('stop-scrolling-mobile');
        },
        close: function () {
          $('html').removeClass('add-space-scroll');
          $('body').removeClass('stop-scrolling-mobile');
        },
      },
    });
  });

  $('.close-popup-btn').on('click', function (e) {
    e.preventDefault()
    $.magnificPopup.close()
  })
  /** MAGNIFICPOPUP - END*/

  /** DESTROY TILT LIBRARY*/
  function destroyTilt() {
    var tiltElements = document.querySelectorAll(`[data-tilt]`);
    var mq = window.matchMedia("(max-width: 991px)");
    if (mq.matches) {
      for (var i = 0, len = tiltElements.length; i < len; i++) {
        tiltElements[i].vanillaTilt.destroy();
      }
    }
  }
  destroyTilt();
  /** DESTROY TILT LIBRARY - END*/
}
