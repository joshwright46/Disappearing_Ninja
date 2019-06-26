$(document).ready(function(){
    console.log("ready!");

    $(".raph").click(function(){
        $(this).hide('slow');
    })

    $(".restore_btn").click(function(){
        window.location.reload();
    })
});