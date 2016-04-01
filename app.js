$(function(){
  // var numSelection=0;
  //generate button
  $("#generateButton").on("click", function(event) {

  })
//if delete button is clicked, content disapears
function theDeleteButton(delete){
  console.log(delete);
  $(".container").append("  ");
}
 $('#deleteButton').on('click', function(event){
  $('.container').hide;
});
}
//else if change button is clicked, background turns red
function backgroundColor(color){
    console.log(color);
$("#changeBackgroundColor").on("click", function(){
  $(this).css("background-color", "red");
});
// }

}) //doc ready
