const elementoHoras = document.querySelector('.horas');
const elementoSegundos = document.querySelector('.segundos');
const elementoMinutos = document.querySelector('.minutos');


function atualizarRelogio() {
    const agora = new Date();

    const h = agora.getHours();
    const s = agora.getSeconds();
    const m = agora.getMinutes();

    elementoHoras.textContent = h.toString().padStart(2, '0');
    elementoSegundos.textContent = s;
    elementoMinutos.textContent = m;

}

setInterval(atualizarRelogio, 1000)

atualizarRelogio();



