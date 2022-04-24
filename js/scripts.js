//Business Logic
function roboResponse(input) {
  const maxNumber = parseInt(input);
  let numbersArray= []
    for (let i = 0; i <= maxNumber; i +=1) {
      numbersArray.push(i.toString());
    }
    return numbersArray;
  }
  
//User Logic
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    const userNumber = $("#input-number").val();
    $(".hidden").hide();
    $("#output-span").text("Hello "+friendlyRobot(arrayMaker(userNumber)));
    $("#output-span").fadeIn()

    window.scrollTo(0,document.body.scrollHeight);
    event.preventDefault();
  });
})