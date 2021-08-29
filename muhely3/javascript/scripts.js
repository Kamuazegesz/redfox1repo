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

let maradek=654%7;
console.log(maradek);
console.log ((654-maradek)/7+1+" csatorna lesz" );

names=["peti","ropik","lalalal","tücsők tihamér","hululu"];

console.log(names[2].length > names[4].length)  

names.push("kacsa");
console.log(names.length);
names[0]="andras"
console.log(names[0]);
console.log(4<names.length)

let post ={
    author:"bill Gates",
    content:"online content communication will change how companies work",
    date:"2021-09-22",
}

console.log(post["author"]);
console.log(post.author);
post.likes=11111;
console.log(post.likes);

let objektum ={
colors: szin=["purple","orange","lightblue"]

}

if (objektum.colors.length>3) {
    objektum.maycolors=true;
}
else{
    objektum.maycolors=false;
}
console.log(objektum.colors);
console.log(objektum.maycolors);

szin.push("gray");
if (objektum.colors.length>3) {
    objektum.maycolors=true;
}
else{
    objektum.maycolors=false;
}
console.log(objektum.maycolors);

for (let i = 1; i <=10; i++) {
    console.log(i);

};
for (let i = 0; i < 20; i++) {
    if (i%2===0) {
        console.log(i);
    };
    
}
let kiraseddig = (szam) => {
    for (let i = 1; i <= szam; i++) {
        console.log(i);
        
    }
}
kiraseddig(9)


function greeting (nev) {
   console.log("Hello "+nev+" How are you doing?");
}

greeting("Andras")


szamoktomb =[,3,55,44,6,32,111,5555,21,66]

function tombkiiras(tombnev) {
    for (let i = 0; i < tombnev.length; i++) {
        console.log(tombnev[i]);
        
    }
}
tombkiiras(szamoktomb);


szamoktomb.forEach((szam) => {
    console.log(szam);
});




