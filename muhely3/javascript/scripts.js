let nevem ="Andras";
console.log("A javascript is betöltött "+nevem);//visszairja a böngésző consolba
// <, >, <= ,>= ,== ,=== (csak tipusnak is egyenlőnek kell lenie),!=


console.log("a feltétel:");
if (false) 
{
    console.log("a feltétel igaz");
}
else
{
    console.log("nemigaz");
}

//jquery rész
let SzovegAzOldalon = $("h1").text();
console.log(SzovegAzOldalon);

$("h1").text("ezt java scriptben valtoztattuk meg");//csak a szöveget cseréli ki

console.log( $("h1").css("background"));//kiirja a consolra a background adatait
$("h1").css("background","magenta");//megváltoztatja magentává
$("li").css("background","lime");
$(".ses p").html("tank <strong>ami</strong> menő")//kicseréli a html elemet
$("ul").append("<li>valami</li>")//hozzáfűz
$("article:last-of-type").remove();
$("li:last-of-type").toggleClass("blue")//ide nem kell a pont az utso ire rá/le veszi a blue classt

//$("#add").click(ado);
$("#add").click(function(ado) 
    {
        $("ul").append("<li>valami</li>")
    }
)

$("#torlo").click((torlo) => {
    $("li:last-of-type").remove();
})

for(let i=0; i<10; i++)
{
    $("ul").append(`<li>${i}.nem csalok majd a vizsgán</li>`)
}

let szinek=[`orange`,`lime`,`magenta`,`brown`,`yellow`,`red`]


function egyszindoboz(szin)
{
    $(".kont").append(`<div class="doboz">ne</div>`)
    $(".kont div:last-of-type").css("background-color",szin)

}


szinek.forEach(egyszindoboz)