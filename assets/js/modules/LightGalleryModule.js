export default function LightGalleryModule() {
  /** LIGHTGALLERY */
  // $(document).on('click', '.is-lightgallery', function (e) {
  // 	e.preventDefault();
  // 	$(this).lightGallery({
  // 		thumbnail: true,
  // 	});
  // });
  $('.is-lightgallery').lightGallery({
    thumbnail: true,
  });
  // GALLERY GROUP
  /* data-thumbs demo - không được có khoảng cách
    [
      {
        "src":"images/library-item-1.png",
        "thumb":"images/library-item-1.png"
      }
    ]
  */
  $(document).on('click', '.is-lightgallery-thumbs', function (e) {
    e.preventDefault();
    let thumbs = $(this).attr('data-thumbs');
    thumbs = thumbs && $.parseJSON(thumbs);
    if (thumbs) {
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: thumbs,
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true,
      });
    }
  });
  /** LIGHTGALLERY - END*/
  // HOME LIGHTGALLERY
  $('.gallery .is-gallery').lightGallery({
    selector: '.item',
    thumbnail: true,
  });
}
