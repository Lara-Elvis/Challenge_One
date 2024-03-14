const primerTexto = document.querySelector(".text-area");
const segundoTexto = document.querySelector(".mensaje");


function btn_encriptador(){
    const textEncriptado = encritador(primerTexto.value);
    segundoTexto.value = textEncriptado;
    primerTexto.value = "";
    segundoTexto.style.backgroundImage = "none";
}

function encritador(textoEncriptador){
    let llavesMatris = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    textoEncriptador = textoEncriptador.toLowerCase();
    for(let i = 0; i < llavesMatris.length; i++){
        if(textoEncriptador.includes(llavesMatris[i][0])){
            textoEncriptador = textoEncriptador.replaceAll(llavesMatris[i][0], llavesMatris[i][1]);
        }
    }

    return textoEncriptador;
}


function btn_DesEncriptador(){
    const textEncriptado = DesEncritador(primerTexto.value);
    segundoTexto.value = textEncriptado;
    primerTexto.value = "";
}

function DesEncritador(textoDesEncriptador){
    let llavesMatris = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    textoDesEncriptador = textoDesEncriptador.toLowerCase();
    for(let i = 0; i < llavesMatris.length; i++){
        if(textoDesEncriptador.includes(llavesMatris[i][1])){
            textoDesEncriptador = textoDesEncriptador.replaceAll(llavesMatris[i][1], llavesMatris[i][0]);
        }
    }

    return textoDesEncriptador;
}


function copiarTexto(){
    var texto = document.querySelector(".mensaje");
    texto.select();
    document.execCommand("copy");
    alert("¡Texto copiado al porta papeles!")
    segundoTexto.value = "";
}