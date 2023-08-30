//= require jquery
//= require jquery.infinitescroll

$(function() {

  // Scrolling to bottom of page loads more thumbnails/links.
  $('.art-grid').infinitescroll({
    navSelector: '.pagination',
    nextSelector: '#next-page-link',
    itemSelector: '.art-grid li',
    loading: {
      //finishedMsg: null,
      //msg: null,
      speed: 0,
      //img: null,
      //img: '/images/ajax-loader.gif',
      msgText: '',
      //selector: null,
      //start: undefined,
      //finished: undefined
    },
    animate: false
  }, function() {
    activateArtviewerLinks();
  });

  // Prevent clicking on modal content from closing the window.
  $('.artviewer-content').click(function(e) {
    e.preventDefault();
    
    return false;
  });

  // Click on thumbnail opens modal.
  $('body').on('click', '.artwork-link', function(e) {
    e.preventDefault();

    var id = $(e.target).parent().data('id');
    var artwork_url = "/art/" + id + "/view";

    $('body').addClass('no-scroll');
    //$("#artviewer-" + $(this).attr('data-portfolio-id')).show();

    // Get HTML from server for displaying artwork.
    $.ajax({
      type: "GET",
      url: artwork_url,
      processData: false
    }).done(function(data) {
      $('body').append(data);
      //activateArtviewerCloseButton();
    }).fail(function(data) {
      console.log("ERROR: ", data);
    });

    return false;
  });

  // Close modal window.
  $('body').on('click', '.modal-close, .artviewer-container', function(e) {
    e.preventDefault();

    $('body').removeClass('no-scroll');
    $('#artviewer-container').remove();

    return false;
  });

});
