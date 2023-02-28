



let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'https://randomuser.me/api/portraits/men/76.jpg') {
      miImage.setAttribute('src','https://randomuser.me/api/portraits/men/73.jpg');
    } else {
      miImage.setAttribute('src', 'https://randomuser.me/api/portraits/men/74.jpg');
      
    }
    if (miSrc === 'https://randomuser.me/api/portraits/men/74.jpg') {
      miImage.setAttribute('src','https://randomuser.me/api/portraits/men/75.jpg');
} 
    if (miSrc === 'https://randomuser.me/api/portraits/men/75.jpg') {
      miImage.setAttribute('src','https://randomuser.me/api/portraits/men/76.jpg');
    } 
}

document.getElementById("boton_1").onclick = function () {

 let texto = document.getElementById("textoLaboral")

 if (texto === document.getElementById("textoLaboral")) {
  document.getElementById("textoLaboral").innerHTML = "Ofrecer mis talentos y conocimientos profesionales a profesionales y empresas que los requieran y que establezcan conmigo una relación comprometida de beneficio mutuo y contratación recurrente, a medida que encaramos los distintos escenarios que nos separen del éxito"
 }

}