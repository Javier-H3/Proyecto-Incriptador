
function encriptarTexto() {

    const textoOriginal = document.getElementById("texto1").value;
   
    const reglasReemplazo = {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
    };
    
    let textoEncriptado = "";
    for (let i = 0; i < textoOriginal.length; i++) {
      const caracter = textoOriginal[i];
      const reemplazo = reglasReemplazo[caracter.toLowerCase()] || caracter;
      textoEncriptado += reemplazo;
    }

    var texto2 = document.getElementById("texto2");
    texto2.value = textoEncriptado; 
  }

  function desencriptarTexto() {

     textoOriginal = document.getElementById("texto1").value;
    
    const reglasReemplazo = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };
    
    let textoEncriptado = textoOriginal;
    for (const cadena in reglasReemplazo) {
      const reemplazo = reglasReemplazo[cadena];
      textoEncriptado = textoEncriptado.replace(new RegExp(cadena, "g"), reemplazo);
    }
    
    var texto2 = document.getElementById("texto2");
    texto2.value = textoEncriptado; 
  }

  function copiar() {

    const texto = document.getElementById("texto2").value;
  
    navigator.clipboard.writeText(texto);
  
    alert("El texto se ha copiado.");
  }


 