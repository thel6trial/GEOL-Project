export default function MenuDropdownModule() {
	if ($('.header').length) {
		/** MENU IN MOBILE */
		$('.header__list  .dropdown').each(function () {
			const dropdown = $(this);
			const arrows = $('<i></i>');
			arrows.addClass('fa fa-angle-down');
			dropdown.find('a').eq(0).append(arrows);
			// ADD PREVIOUS BTN
			const prevBtn = `<div class="prev-btn">
      <i class="fa fa-angle-left"></i>
      </div>`;
			dropdown.find('> .sub-menu > ul').before(prevBtn);
		});

		$('.header__list .dropdown .fa').each(function () {
			const dropdown = $(this).closest('.dropdown');
			const ul = $(this).closest('ul');
			$(this).on('click', function (e) {
				e.preventDefault();
				// OPEN MENU CLICKED
				dropdown.toggleClass('--show');
				ul.hasClass('header__list') ? ul.scrollTop(0) : false;
				ul.toggleClass('--s-c');
			});
		});
		/** MENU IN MOBILE - END */
	}
}
