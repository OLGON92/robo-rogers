//Business Logic
function createArray(input) {
  let numberArray= []
  const maxNumber = parseInt(input);
    for (let i = 0; i <= maxNumber; i +=1) {
      numberArray.push(i.toString());
    }
    return numberArray;
}
  
  
//User Logic
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    const userNumber = $("#input-number").val();
    $(".hidden").hide();
    $("#output-span").text(roboResponse(createArray(userNumber)));
    $("#output-span").fadeIn()

    window.scrollTo(0,document.body.scrollHeight);
    event.preventDefault();
  });
})