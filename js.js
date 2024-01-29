let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#btn");

let sizePassword = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let containerPassword = document.querySelector("#container-senha");

let charset = "abcdefghijklmnopqrsuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
// gerar a senha
function generatePassword(){

    let pass = "";

for( let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
}
containerPassword.classList.remove("hide");
senha.innerHTML = pass;
novaSenha = pass;
}
// clicar e copiar 
function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}