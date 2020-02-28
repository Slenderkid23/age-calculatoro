// start off with the click //
let currentyear;
let currentage;
let answer;

$(".Math").click(function() {
currentyear=parseInt($(".currentyear").val());
currentage=parseInt($(".currentage").val());
let name=$(".name").val();
answer=2050-currentyear;
let age=currentage+answer;
 $("div").append(`<p>${name} in the 2050 you will be ${age}</p>`);
});