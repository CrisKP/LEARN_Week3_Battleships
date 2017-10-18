$(document).ready(function() {
  // set our torpedoe values globally
  var torpedoe = 0;
  var torpLeft = 25;
  //created a global array called board with 10 empty arrays
  // with 10 spots which gives you the 100 squares of board game

  var board = [[], [], [], [], [], [], [], [], [], []];
  //created a global constant variable called SHIP with a value of one.
  const SHIP = 1;
  var cords = [];

  //function to assign 5 random locations for ships
  for(var y = 0; y < 5; y++){
    function randNums(){
      var randRow = Math.floor(Math.random() * 10) + 0;
      var randCol = Math.floor(Math.random() * 10) + 0;
      return [randRow, randCol]
    }
    cords = randNums();
    board[cords[0]][cords[1]] = SHIP;
  }
  console.log(board);

  //loop appends 10 table rows with ids into the table
  for(var i = 0; i < 10; i++) {
    $("table").append("<tr id=" + i + "></tr>");
    //loop appends 10 table datas with ids into the table rows
    for(var x = 0; x < 10; x++) {
    $("#" + i).append("<td id= td" + x + ">0</td>");
    }
  }
  // onclick changes color, counts torps and
  $("td").on("click", (function(){
    $(this).addClass("torpedoed");
    $(this).off("click");

    // using the short hand -- and ++ for minus and adding to our torpedoe values
    torpLeft--;
    torpedoe++;
    // displaying torpedoes used and remaining floated to the left of table
    $(".torpCount").text(torpedoe);
    $(".torpRemain").text(torpLeft);


  }));

});
