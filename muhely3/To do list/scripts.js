$("button").click(function () {
   let listaelem=$("input").val() 
    console.log(listaelem)
    $("ul").prepend(`<li> <div class="szoveg">`+listaelem +`</div><div class="iconbox"><img src="icons/bin.svg" width="20" class="kep 1"></img><img src="icons/tick.svg" width="17" class="kep 2"></div></li>` );
    $("input").val("")
    


    $(".kep.1").click(function () {
        $(this).parent().parent().remove();
    })
    $(".kep.2").click(function () {
        $(this)./*css("background-color","violet")*/toggleClass("vilo");
        $(this).parent().parent().find(".szoveg").toggleClass("athuz");
    })
    

})
