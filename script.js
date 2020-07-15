$(".changeBox1").click(function(){   
    $(".box1").toggleClass("box1Change");
    console.log("script in root");
})

$(".changeBox2").click(function(){
    $(".box2").toggleClass("box2Change");
})

$(".changeBox3").click(function(){
    $(".box3").toggleClass("box3Change");
})

$(".changeAll").click(function(){
$(".box1").toggleClass("box1Change");
$(".box2").toggleClass("box2Change");
$(".box3").toggleClass("box3Change");
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
    $(".box1, .box2, .box3").hide();
})

$(".showAll").click(function(){  
    $(".box1, .box2, .box3").show();
})   

$(".resetColors").click(function(){
 console.log("click is working properly");
 $(".box1").removeClass("box1Change");
 $(".box2").removeClass("box2Change");
 $(".box3").removeClass("box3Change");
})
