$( document ).ready(function() {

  $.ajax({
      url: 'https://api.imgur.com/3/image/MkSBUPT',
      headers: {
          'Authorization': 'Client-ID 31852188e75d202'
      },
      type: 'GET',
      success: function(data) {
        document.write(data.data.link);
      }
  });

});
