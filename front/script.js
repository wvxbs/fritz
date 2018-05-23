
function Clica(){
    var endereco = document.getElementById('idendereco');
    $(endereco).fadeIn("medium");
    document.getElementById('idbotao').style.display = "none";
    document.getElementById('idheader').style.marginTop = "15px";

}     

var x = document.getElementsByClassName("unitario");
var i=0;

function Densidade() {
    for(i =0; i <x.length; i++) {
        x[i].style.width =  "50%";
        x[i].style.height = "300px";

    }    
}


function Densidade2() {
    for(i = 0; i < x.length; i++) { 
        x[i].style.width = "30%";
        x[i].style.height = "300px";

    }
}

function Densidade3(){
    for(i = 0; i < x.length; i++) {
        x[i].style.width = "20%";
        x[i].style.height = "190px";
    }
}

function OcultarUni(){
    document.getElementById('filtro').style.display = "none";
    for(i = 0; i < x.length; i++) x[i].style.display = "none";
    
}

function Entrar(){
    var entrar = document.getElementById('entrar');
    $(entrar).fadeIn("medium");
    document.getElementById('filtro').style.display = "none";
    for(i = 0; i < x.length; i++) x[i].style.display = "none";

}

function ExibirCadastro() {
    var entrar =  document.getElementById('entrada');
    $(entrar).fadeOut("fast");
    var cadastro = document.getElementById('cadastro');
    $(cadastro).fadeIn("fast");
    document.getElementById('primeiravez').style.display = "none";
}

function VoltaUni() {
    var entrar = document.getElementById('entrar');
    $(entrar).fadeOut("fast");

    for(i =0; i <x.length; i++) {
        x[i].style.display= "inline-block";

    }    
    document.getElementById('filtro').style.display = "inline";
    
}


//
$(document).ready(function () {
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    //Quando o campo cep perde o foco.
    $("#cep").blur(function () {

        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                        $(segue).fadeIn("medium");
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

