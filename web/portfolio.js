$(function() {

  var hash = window.location.hash.replace('#', '');

  var openPortfolioPiece = function(id) {
    var portfolioPiece = $("#portfolio-" + id);

    if (portfolioPiece.length) { // Only execute if the element actually exists.
      $('body').addClass('no-scroll');
      portfolioPiece.show();
    }
  };

  // If there's a hash present in the URL, try opening the corresponding portfolio piece.
  if (hash !== '') {
    openPortfolioPiece(hash);
  }

  // Open a portfolio piece.
  $('#portfolio-featured a').click(function(e) {
    e.preventDefault();
    
    openPortfolioPiece($(this).attr('data-portfolio-id'));

    return false;
  });

  // Close modal window.
  $('a.modal-close, .portfolio-container').click(function(e) {
    e.preventDefault();
    $('body').removeClass('no-scroll');
    $('.portfolio-container').hide();

    return false;
  });

  // Prevent clicking on modal content from closing the window.
  $('.portfolio-content').click(function(e) {
    e.preventDefault();
    
    return false;
  });

  // Allow website launch buttons to go through.
  $('a.button.launch').click(function(e) {
    window.location.href = $(this).attr('href');

    return true;
  });

  // Reveal more portfolio pieces.
  $('#more-projects-button').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#close-more-projects-button').show();
    $('#portfolio-more').slideDown();

    return false;
  });

  $('#close-more-projects-button').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#more-projects-button').show();
    $('#portfolio-more').slideUp();

    return false;
  });
  
});
