$(document).ready(function() {
  // set our torpedoe values globally
  var torpedoe = 0;
  var torpLeft = 5;
  var hitsCount = 0;
  var isGameOver = false;
  var shipNum = 2;
  //created a global constant variable called SHIP with a value of one.
  const SHIP = 1;
  //created a global array called board with 10 empty arrays
  // with 10 spots which gives you the 100 squares of board game
  var board = [[], [], [], [], [], [], [], [], [], []];
  var randRow;
  var randCol;

  // CREATE BOARD -----------------------------------------------------------

  //loop appends 10 table rows with ids into the table (making the grid)
  for(var i = 0; i < 10; i++) {
    $("table").append("<tr id=" + i + "></tr>");
    //loop appends 10 table datas with ids into the table rows
    for(var x = 0; x < 10; x++) {
    $("#" + i).append("<td id= td" + x + "></td>");
    }
  }

  // PLACE SHIPS -----------------------------------------------------------

  //function to assign random locations for ships
  function randNums(){
    var randRow = Math.floor(Math.random() * 10) + 0;
    var randCol = Math.floor(Math.random() * 10) + 0;
    return [randRow, randCol]
  }


    var hiddenCords = []
  // for loop runs randNum to get location of ships
  for(let y = 0; y < shipNum; y++){
    var cords = randNums();
    // save coordinates

    var newCord = randNums();
    cords.push(newCord);

    // add class of hiddenShips to each square with a ship

    $('tr#'+cords[0]).find('#td'+cords[1]).addClass("hiddenShips");

    // update board array with ship location
    board[cords[0]][cords[1]] = SHIP;
    // hiddenCords = [cords[0], cords[1]];
  }
  console.log("newCord: " + newCord);
  console.log("cords: " + cords);
  console.log("hiddenCords: " + hiddenCords);
  console.log(board);


  // onclick changes color, counts torps and displays "HIT" or "MISS"
  $("td").on("click", (function(){

    // using the short hand -- and ++ for minus and adding to our torpedoe values
    torpLeft--;
    torpedoe++;
    // displaying torpedoes used and remaining floated to the left of table
    $(".torpCount").text(torpedoe);
    $(".torpRemain").text(torpLeft);

    // Finding ids for board array
    var rowID = $(this).parent().attr("id");
    var tdID = $(this).attr("id");
    tdID = (tdID[tdID.length - 1])
    //checks board array for SHIP
      if (board[rowID][tdID] == 1) {
        $(this).text("Hit!");
        $(this).addClass("torpedoed");
        $(this).off("click");
        hitsCount++;
      } else {
        $(this).text("Miss!");
        $(this).addClass("missed");
        $(this).off("click");
      }

      if (torpLeft == 0) {
        $("#winDisplay").text("You're out of torpedoes!");
        $("td").off("click");
      }

      if (hitsCount == shipNum) {
        $("#winDisplay").text("You Won!");
        $("td").off("click");
        isGameOver = true;
      }

      // if (isGameOver) {
      //
      // }




  }));

});
