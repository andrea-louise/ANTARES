var enderecoForm = document.querySelector(".form-body");
 var cepinput = document.querySelector("#cep");
var ruainput = document.querySelector("#rua");
var bairroinput = document.querySelector("#bairro");
var cidadeinput = document.querySelector("#cidade");
var estadoinput = document.querySelector("#estado");
var formInput = document.querySelector("[data-input]");


cepinput.addEventListener("keyup",(e) => {

    const inpuvalue = target.value;
if(inputvalue.length === 8){
    getEmdereco(inputvalue);
}
});

var getEmdereco =  async (cep) => {

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiURL)
    const data = await response.json();
    console.log(data);
    console.log(formInput);
    console.log(data.erro);
    ruainput.value = data.logradouro;
    cidadeinput.value = data.localidade;
    bairroInput.value = data.bairro;
    estadoInput.value = data.uf;
}
