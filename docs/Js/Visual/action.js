

function Clica(){
    var endereco = document.getElementById('idendereco');
    $(endereco).fadeIn("medium");
    document.getElementById('idbotao').style.display = "none";
    document.getElementById('idheader').style.marginTop = "15px";

}

function DisplayMenuMob(){
    document.getElementById('menunavmob').style.display = "block";
    for(i = 0; i < divs.length; i++) divs[i].style.display = "none";
    
}

function ExibirBusca(){
    document.getElementsByClassName('busca').style.display = "block";

}

function OcultarBusca(){
    document.getElementsByClassName('busca').style.display = "none";

}

var imguni = document.getElementsByClassName("imguni");
var divs = document.getElementsByClassName('unitario');
var i=0;


function Densidade() {
    for(i =0; i <divs.length; i++) {
        divs[i].style.width =  "50%";
        divs[i].style.height = "60%";

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

function ExibirCadastro() {
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

function ExibirQtd() {
    document.getElementsByClassName('addcarrinnho').style.width = "auto";
    document.getElementsByClassName('addcarrinhodireita').style.opacity = "1.0";
    document.getElementsByClassName('addcarrinhoesquerda').style.opacity = "1.0";

}

