export default function CountDownModule() {
  /** COUNT DOWN */
  $('.cd-time').each(function () {
    let itv;
    const $time = $(this);

    function countDown() {
      const day = $time.find('.d');
      const hours = $time.find('.h');
      const minutes = $time.find('.m');
      const seconds = $time.find('.s');
      const endTimeString = $time.data('end-time') || '13/06/2021';
      const arrEndTimeString = endTimeString.split('/');
      const formatEndTimeString = [
        arrEndTimeString[1], //m
        arrEndTimeString[0], //d
        arrEndTimeString[2], //y
      ].join('/');
      const endTime = Date.parse(formatEndTimeString);
      const now = Date.parse(new Date());
      const restTime = endTime - now;
      //convert

      const d = Math.floor(restTime / (1000 * 60 * 60 * 24));
      const h = Math.floor((restTime / (1000 * 60 * 60)) % 24);
      const m = Math.floor((restTime / (1000 * 60)) % 60);
      const s = Math.floor((restTime / 1000) % 60);
      //render to html

      day.html(`${d}`);
      hours.html(`0${h}`.slice(-2));
      minutes.html(`0${m}`.slice(-2));
      seconds.html(`0${s}`.slice(-2));
      if (endTime - now <= 0) {
        day.html(`00`);
        hours.html(`00`);
        minutes.html(`00`);
        seconds.html(`00`);
        clearInterval(itv);
        return;
      }
    }
    countDown();
    itv = setInterval(countDown, 1000);
  });
  /** COUNT DOWN - END*/
}
