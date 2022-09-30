export default function FixedToolsModule() {
  let stoFixedTools;
  const time = 600;
  $(document).on('scroll', () => {
    // $('.fixed-promo').addClass('--hidden')
    if (stoFixedTools) {
      clearTimeout(stoFixedTools);
    }
    stoFixedTools = setTimeout(() => {
      // $('.fixed-promo').removeClass('--hidden')
    }, time);
  })
}