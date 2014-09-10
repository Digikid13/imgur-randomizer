function ajaxCall(query) {
  $.ajax({
      url: 'https://api.imgur.com/3/gallery/search/',
      headers: {
          'Authorization': 'Client-ID 31852188e75d202'
      },
      data: {q: JSON.stringify(query)},
      type: 'GET',
      success: function(data) {
        var random = Math.floor(Math.random() * data.data.length);

        while(data.data[random].nsfw !== null) {
          random = Math.floor(Math.random() * data.data.length);
        }
        
        $('div#image').html('');
        $('div#image').append('<img src="' + data.data[random].link + '" />');
      }
  });
}

$( document ).ready(function() {
  var $input = $('<input type="text"><br>');

  $('body').prepend($input);

  $("input").keyup(function (e) {
    if (e.keyCode == 13) {
      ajaxCall($(this).val());
      $(this).val('');
    }
  });

});
