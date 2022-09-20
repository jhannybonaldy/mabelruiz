const numero = Math.round(Math.random() * (100 - 70) + parseInt(70));
const ciudad = document.getElementById("#location");
var city;

fetch("https://ipinfo.io/json")
  .then((response) => response.json())
  .then((data) => (city = data.city));

if(city === undefined){
  ciudad.innerHTML = numero + " mujeres están viendo este vídeo en tu ciudad";
}else{
  ciudad.innerHTML = numero + " mujeres están viendo este vídeo en " + data.city;
}
