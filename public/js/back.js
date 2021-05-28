
const buttonretour = document.getElementById('retour');
const buttondownloadredact = document.getElementById('redactFile');
const buttondownloadclik = document.getElementById('clickFile');
buttonretour.addEventListener("click", myFunction);
buttondownloadredact.addEventListener("click",downloadRead);
buttondownloadclik.addEventListener("click", downloadClick);
function myFunction() {
    window.location = "/";
  }
function downloadRead(){
    window.location = "/downloadRead";
}
function downloadClick(){
    window.location = "/downloadClick";
}