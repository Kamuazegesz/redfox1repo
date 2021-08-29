$(".kartya.first h3").html("<strong>heh</strong>")
$(".kartya.first").css("background-color","blue")
$(".kartya.last").css("border","solid 5px blue")

let color="purple", number=10, word="cool";

if (color==="purple") {
    $(".doboz").css("width","300px")
    $(".doboz").css("height","300px")
    $(".doboz").css("background","purple")
}

if (number>100) {
    $(".szoveg").text("wow, denagy ez a szam");

}
else{
    $(".szoveg").text("ez csak egy szam")
}

let nevek=["András","János","György","Károly","Ferenc","István"]

$(".java").append(`<ul class="lista"></ul>`)

nevek.forEach(elem => {
    $(".lista").append(elem);
});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
}

$("body").append(`<h1 id="ide"></h1>`);
$("#ide").text(additionalBlock.title);

$("body").append(`<p id="oda"></p>`);
$("#oda").text(additionalBlock.text);

$("body").append(`<button class="gomb 1">gomb</button>`);
$(".gomb.1").click(function () {
    console.log("Igen, most rámkattintottál");
});

$("body").append(`<button class="gomb 2">gombváltoztató</button>`);
$(".gomb.2").click(function () {
    $(".gomb.1").text("megváltozott");
});

$("body").append(`<button class="gomb 3">szinváltoztató</button>`);
$(".gomb.3").click(function () {
    $(".gomb").css("background-color","blue");
    $(".gomb").css("color","white");
});

let buttonszin
let ertek =11;


$(".inputbutton").click(function  () {
    if(ertek===11){ 
        buttonszin=$(".inputtext").val();
        $(".inputbutton").css("background-color",buttonszin)
       
    }
    $(".inputtext").val ('');
    ertek=22;
    console.log(buttonszin);
})


let szamszamlalo=0;

$("#szamlalogomb").on("click", function () {
    szamszamlalo=szamszamlalo+1;
    $("#szamlaloszam").text(szamszamlalo);
})

$("#szamlalo-gomb").on("click", function () {
    szamszamlalo=szamszamlalo+-1;
    $("#szamlaloszam").text(szamszamlalo);
})


let id=
$("#addtodo").click(function () {
    let todo =$("#addtext").val();
    console.log(todo);
    $("#lista").append(`<li class="ne">`+todo+"</li>");
    
    $("#addtext").val("")
    
    $(".ne").click(function () {
        
        $(this).css("text-decoration","line-through");
    })
})







  









