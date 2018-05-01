//when doc is ready, load JQ
$(document).ready(function(){
  //do the function when you click the button
  $(".btn").click(function(){
    //creating targ variable getting text inside button
    var targ = $(this).text();

    //creating new rfunction, grabbing text from button and applying it to the class in the jQ selector
    $("."+targ).hide(3000, function(){
      //creating random number applying it to variables
      var r = (1+Math.floor(Math.random()=255).toString();
      var g = (1+Math.floor(Math.random()=255).toString();
      var b = (1+Math.floor(Math.random()=255).toString();
      //new variable with rgb value
      var randColor = "rgba"("+r+","+g+","+b+","+a+".255);
      //setting background color in css to random color
      $(this).css("background-color", randColour);
    }).show(3000);
  })
})
