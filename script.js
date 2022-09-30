const inputTexto = document.querySelector(".inputTexto"); //ayuda a seleccionar el elemento
const mensaje = document.querySelector(".mensaje");

/*`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value); //el valor de la entrada de texto pero encriptado
    mensaje.value = textoEncriptado; //resultado de la encriptacion
    mensaje.style.backgroundImage = "none"; //cuando se presiones el boton de encriptar no se muestre la imagen
    inputTexto.value = ""; //para que desaparezca el mensaje en la entrada de texto
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);  
    mensaje.value = textoDesencriptado; //resultado de la desencriptacion
    mensaje.style.backgroundImage = "none"; //cuando se presiones el boton de encriptar no se muestre la imagen
    inputTexto.value = ""; //para que desaparezca el mensaje en la entrada de texto
}

function encriptar(stringEncriptada){ //recibe el texto para ser encriptado
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],
    ["u", "ufat"]];//array lista dentro de otra
    stringEncriptada = stringEncriptada.toLowerCase(); //pone en minuscula

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0], matrizCodigo[i][1]); //el solo replace reemplazaria a una letra, por eso se pone all
            //Esta en la posicon 0 y lo reemplaza en la posicion 1
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesenncriptada){ 
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],
    ["u", "ufat"]];
    stringDesenncriptada = stringDesenncriptada.toLowerCase(); 

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesenncriptada.includes(matrizCodigo[i][1])){
            stringDesenncriptada = stringDesenncriptada.replaceAll
            (matrizCodigo[i][1], matrizCodigo[i][0]); //Esta en la posicon 1 y lo reemplaza en la posicion 0
        }
    }
    return stringDesenncriptada;
}

function copiar(){
    mensaje.select(); //para seleccionar todo
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");

}