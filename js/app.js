// Display User Data into Table Using JavaScript
var data = [];
for (var i = 0; i < USERS.length; i++) {
    data+="<tr>";    
    data+="<td>"+ USERS[i].name.title+"\n"+USERS[i].name.first+"\n"+USERS[i].name.last+"\n"+"</td>";
    data+="<td>"+USERS[i].email+"</td>";
    data+="<td>"+ '<p>"'+ USERS[i].phone +'"</p>' +"</td>";    
    data+="<td>"+ '<img src= "' + USERS[i].pictureUrl + '" />' +"</td>";       
    data+="<td>"+USERS[i].accountBalance+"</td>";
    data+="</tr>";
}
document.getElementById("data-tbody").innerHTML = data;

// Table Rows Randomly Rearrange Using JavaScript
function RrandomlyRerr() {
    //get the parent table for convenience
    let table = document.getElementById("data-tbody");  
    //1. get all rows
    let rowsCollection = table.querySelectorAll("tr");
    //2. convert to array
    let rows = Array.from(rowsCollection)
      .slice(0); //skip the header row
    //3. shuffle
    shuffleArray(rows);
    //4. add back to the DOM
    for (const row of rows) {
      table.appendChild(row);
    }
  }
  // Table Rows Shuffle Array Randomly Using JavaScript
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

var sec = '';
// Start Btn
function startBtn() {
    sec = setInterval(RrandomlyRerr,1000);
}
// Stop Btn
function stopBtn() {
    clearInterval(sec);
}
// Sort Btn
function sortBtn() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("userTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }