function palindrome(str) {

    //elimina caracteres NO alphanumericos
    let newString=str.replace(/[^0-9a-z]/gi, '');
  
    //funcion para invertir un string
    function reverse (str) {
      if (str === "") {
          return "";
      } else {
          return reverse(str.substr(1)) + str.charAt(0);
      }
    }
  
    //se almacena string invertido
    let newInvertido = reverse(newString);
  
    console.log(str);
    console.log(newString);
    console.log(newInvertido);
  
    //convierte las dos cadenas a minusculas y las compara para enviar resultado
    if(newString.toLowerCase()==newInvertido.toLowerCase()){
      return document.getElementById("resultado").innerHTML="Si es palindromo";;
    }else{
      return document.getElementById("resultado").innerHTML="No es palindromo";;
    }
  }
  
  function llamada(){
    palindrome(document.getElementById("caja").value);
  }
  
