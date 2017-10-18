$(document).ready(function() {

  //loop appends 10 table rows with ids into the table
  for(var i = 0; i < 10; i++) {
    $("table").append("<tr id=" + i + "></tr>");
    //loop appends 10 table datas with ids into the table rows
    for(var x = 0; x < 10; x++) {
    $("#" + i).append("<td id= td" + x + ">0</td>");
    }
  }

  $("td").on("click", (function(){
    $(this).addClass("torpedoed");

  }));


});
