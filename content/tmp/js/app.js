

function fadein(){
  $('body').hide().fadeIn(1000);
}
fadein();

$(document).ready(function() {
  
  $('#search').click(function(){
 $('#search').attr('placeholder', 'Wiki Search');
  });
  
  function sample() {
    var search = $("#search").val();
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      search +
      "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      
      success: function(data) {
        $("#output").html("<hr>");
        
        for (var i = 0; i < data[1].length; i++) {
         $('#output').append(`<div class='well'><a target='blank' href= ${data[3][i]}><h2> ${data[1][i]} </h2></a> <p> ${data[2][i]} </p><img src='images/wiki.png' class='img-responsive pull-right' width='50' height='50' alt='pic'> </div>`);
          
        } 
        $("#search").val("");
      },
      error: function(error) {
        alert(`character ${search} not Found`);
      }
    }); 
  }; 

  $("#search").keypress(function(e) {
    if (e.which == 13) {
      sample();
    }
  }); 
});

