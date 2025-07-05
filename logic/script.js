let pasoActual = 1;
const totalPasos = 6;

function mostrarPaso(n) {
    for (let i = 1; i <= totalPasos; i++) {
        const paso = document.getElementById("paso" + i);
        paso.classList.remove("activo");
    }
    const pasoMostrar = document.getElementById("paso" + n);
    pasoMostrar.classList.add("activo");
    pasoActual = n;
}
document.addEventListener("DOMContentLoaded", () => {
    mostrarPaso(1);
});