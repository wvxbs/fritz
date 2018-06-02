function Clica(){
    var endereco = document.getElementById('idendereco');
    $(endereco).fadeIn("medium");
    document.getElementById('idbotao').style.display = "none";
    document.getElementById('idheader').style.marginTop = "15pdivs";

}

function DisplayMenuMob(){
    document.getElementById('menunavmob').style.display = "block";
    for(i = 0; i < divs.length; i++) divs[i].style.display = "none";
    
}

var divs = document.getElementsByClassName("unitario");
var i=0;

function Densidade() {
    for(i =0; i <divs.length; i++) {
        divs[i].style.width =  "50%";
        divs[i].style.height = "auto";

    }    
}

function Densidade2() {
    for(i = 0; i < divs.length; i++) { 
        divs[i].style.width = "30%";
        divs[i].style.height = "auto";

    }
}

function Densidade3(){
    for(i = 0; i < divs.length; i++) {
        divs[i].style.width = "20%";
        divs[i].style.height = "auto";
    }
}

function OcultarUni(){
    document.getElementById('filtro').style.display = "none";
    for(i = 0; i < divs.length; i++) divs[i].style.display = "none";
    
}

function Entrar(){
    document.getElementById('filtro').style.display = "none";
    var entrar = document.getElementById('entrar');
    $(entrar).fadeIn("medium");
    document.getElementById('entrar').style.position = "relative";
    document.getElementById('entrar').style.width = "80%";
    document.getElementById('entrada').style.display = "block";
    document.getElementById('cadastro').style.display = "none";
    document.getElementById('entrar').style.marginLeft = "auto"; 

}

function EdivsibirCadastro() {
    var entrar =  document.getElementById('entrada');
    $(entrar).fadeOut("fast");
    var cadastro = document.getElementById('cadastro');
    $(cadastro).fadeIn("fast");
    document.getElementById('entrar').style.width = "750pdivs";
    document.getElementById('entrar').style.marginLeft = "100pdivs";
    for(i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";

    }

}


function CancelaEntrar() {
    document.getElementById('entrar').style.display = "none"; 
    var filtro = document.getElementById('filtro');
    $(filtro).fadeIn("medium");
    for(i = 0; i < divs.length; i++) $(divs[i]).fadeIn("medium");

}
