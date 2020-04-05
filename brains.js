//when about button is clicked display info
$("#about").on("click", function() {
    $("#projectDisp").hide(1000);
    $("#contactDisp").hide(1000);
    $("#aboutDisp").toggle(1000);
});
//when projects button is clicked display projects
$("#projects").on("click", function() {
    $("#aboutDisp").hide(1000);
    $("#contactDisp").hide(1000);
    $("#projectDisp").toggle(1000);
});
//when contact button is clicked dipslay contact info
$("#contact").on("click", function() {
    $("#aboutDisp").hide(1000);
    $("#projectDisp").hide(1000);
    $("#contactDisp").toggle(1000);
});

