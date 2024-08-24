const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const ellas = document.getElementById("ellas");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");
const h6 = document.getElementById("hiden");

let remplazar = [
["e", "enter"],
["o", "ober"],
["i", "imes"],
["a", "ai"],
["u", "ufat"]
]

const replace = (nuevoValor) => {
    mensajeFinal.value = nuevoValor;
    ellas.classList.add("oculto");
    h6.classList.add("oculto");
    ingresoTexto.value ="";
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    /*right.style.display = none;
    mensajeFinal.classList.add("ajustar");*/
}

const reset = () => {
    mensajeFinal.value = "";
    ellas.classList.remove("oculto");
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    /*mensajeFinal.classList.remove("ajustar");*/
    ingresoTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
    function encriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
        if (newText.includes(remplazar[i][0])){
            newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
        }
        }
        return newText;
    }
    replace(encriptar(texto));
} else {
    alert("Ingrese texto a encriptar");
    reset()
}
});
    //const textoEncriptado = encriptar(texto)


botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto != "") {
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            }
        }
        return newText;
    }
    replace(desencriptar(texto));
} else {
    alert("Ingrese texto a desencriptar");
}
});
   /* rempalce(desencriptar(texto));*/



botonCopiar.addEventListener("click", () => {
    /*let texto = mensajeFinal;

    texto.select();
    document.execCommand('copy');
    alert("Texto copiado");*/
    
    navigator.clipboard.writeText(mensajeFinal.value)
    .then(() => {
        alert("Texto copiado");
        reset();
    })
    .catch(err => {
        consoleerror('Error al copiar: ', err);
    });
    });
    /*
    mensajeFinal.select();
    document.execCommand('copy');
    alert("Texto copiado");
reset();
});*/