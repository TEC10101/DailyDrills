Studying AJAX and jQuery

$(document).ready(function() {


 $('form').submit(function (evt) {
   evt.preventDefault();
   var $searchField = $('#search');
   var $submitButton = $('#submit');
   var searchTerm = $searchField.val();
   
   // Disable search box while photos are loading...
   $searchField.prop("disabled", true);
   $submitButton.attr("disabled", true).val("searching....");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    function displayPhotos(data) {
      console.log(data);
      var photoHTML = '';
      //if (jQuery.isEmptyObject(data.items)) {
      if (data.items.length === 0) {
        photoHTML += '<li>Nothing found!</li>';
      } else {
        photoHTML = '<ul>';
        
        // ...loop through each item and create the HTML
        $.each(data.items,function(i,photo) {
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // ...end $each
        photoHTML += '</ul>';
      }
      
      // ...display photos...
      $('#photos').html(photoHTML);
      // ...and reenable search box.
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
   
  }); // end submit

}); // end ready
