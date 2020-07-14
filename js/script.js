$(".changeBox1").click(function(){
    $(".box1").toggleClass("box1Change");
})
$(".changeBox2").click(function(){
    $(".box2").toggleClass("box2Change");
})
$(".changeBox3").click(function(){
    $(".box3").toggleClass("box3Change");
})
$(".changeAll").click(function(){
    $(".box1").css("background-color", "green");
    $(".box1").css("border","red");
    $(".box2").css("background-color", "yellow");
    $(".box2").css("border", "red");

    $(".box3").css("background-color", "black");
    $(".box3").css("border", "red");

})

$(".hideBox1").click(function(){
    $(".box1").toggle();
})
$(".hideBox2").click(function(){

    $(".box2").toggle();
})
$(".hideBox3").click(function(){
        $(".box3").toggle();
})
$(".hideAll").click(function(){  
    $(".box1, .box2, .box3").hide();})
$(".showAll").click(function(){  
        $(".box1, .box2, .box3").show();})   

$(".resetColors").click(function(){
 console.log("click is working");
})
 
