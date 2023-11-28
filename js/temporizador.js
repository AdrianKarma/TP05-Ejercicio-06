const temporizador = document.getElementById("temporizador");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const resetear = document.getElementById("resetear");
const tiempoInput = document.getElementById("tiempoInput");

let tiempoRestante = 0;
let intervalo = null;
let estaCorriendo = false;

function formatearTiempo(valor) {
  return valor < 10 ? "0" + valor : valor;
}
function mostrarTiempo() {
  const horas = Math.floor(tiempoRestante / 60);
  const minutos = tiempoRestante % 60;
  temporizador.textContent =
    formatearTiempo(horas) + ":" + formatearTiempo(minutos);
}
function decrementarTiempo() {
  if (tiempoRestante === 0) {
    pausarTemporizador();
    alert("¡Tiempo terminado!");
  } else {
    tiempoRestante--;
    mostrarTiempo();
  }
}
function iniciarTemporizador() {
  if (!estaCorriendo) {
    tiempoRestante = tiempoInput.value * 60;
    if (tiempoRestante > 0) {
      intervalo = setInterval(decrementarTiempo, 1000);
      estaCorriendo = true;
    } else {
      alert("Ingrese un tiempo válido.");
    }
  }
}
function pausarTemporizador() {
  clearInterval(intervalo);
  estaCorriendo = false;
}
function resetearTemporizador() {
  pausarTemporizador();
  tiempoRestante = 0;
  mostrarTiempo();
}

iniciar.addEventListener("click", iniciarTemporizador);
pausar.addEventListener("click", pausarTemporizador);
resetear.addEventListener("click", resetearTemporizador);
