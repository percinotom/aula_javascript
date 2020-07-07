
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://toledoprudente.edu.br/");
    //window.location.href = "https://toledoprudente.edu.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
//alert(soma(5, 10));
*/

/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*
var d= new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth()+1);
*/

/*
var count;
for(count=1; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual é a sua idade");
//var idade = 18;
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/




/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/


/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
//console.log(lista.length);
//alert(lista[1])
//console.log(lista.reverse());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/

/*
var nome = "Marcos Vinicius";
var idade = 18;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"))
*/