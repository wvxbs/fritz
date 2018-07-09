var largura = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > largura) {
      console.log(el);
    }
  }
);

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

function ExibeEntrarRestante() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

}

function FechaEntrarRestante(){
    var popup = document.getElementsByClassName("entrarrest");
    popup.classList.toggle("hide");

}

var prevScroll = window.pageYOffset;
window.onScroll = function(){
    var currentScroll = window.pageYOffset;
    if(prevScroll > currentScroll) {
        this.document.getElementsByClassName("navdesc").style.top = "0";

    } 
    else {
        document.getElementsByClassName("navdesc").style.top = "-80px";

    }
    prevScroll = currentScroll;

}

function ExibirProdutoDesc(){
    var seta = document.getElementsByClassName('descprodutoseta');
    var transform = document.getElementsByClassName('descprodutodesc');
        $(seta).click(function(){
            $('descprodutodesctransform').toggleClass('descprodutodesctransform-active');
        });

}

function SetaAbrir(){
     document.getElementsByClassName('descprodutoseta');

}

function OcultarProdutoDesc(){
    var seta = document.getElementsByClassName('descprodutoseta');
    var transform = document.getElementsByClassName('descprodutodesc');
           
}


