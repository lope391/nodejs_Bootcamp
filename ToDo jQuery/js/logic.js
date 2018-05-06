//strikethrough list items with click
$("ul").on("click","li",function(){
    $(this).toggleClass("crossed");
});

//on enter input
$("input").on("keypress",function(e) {
    if (e.which === 13) {
        var value = $(this).val();
        //store input value
        console.log(value);

        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+ value +"</li>");

        $(this).val('');
    }
});

//Delete to do with icon
$("ul").on("click","span",function () {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$(".fa-plus").click(function () {
    $("input").fadeToggle(0.5);
});