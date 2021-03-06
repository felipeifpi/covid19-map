import { Dados } from './Dados/Dados.js';
import { Display } from './Displays/Display.js';
import { setDisplayAltasMedicas } from './Displays/AltasMedicas.display.js';
import { setDisplayConfirmados } from './Displays/Confirmados.display.js';
import { setDisplayMortalidade } from './Displays/Mortalidade.display.js';
import { setDisplayObitos } from './Displays/Obitos.display.js';
import { initBaseMap } from './Mapas/mapaBase.js';
import { initMalhaPrincipal } from './Mapas/malha.js'
import { renderHeatMap } from './Mapas/heatMap.js'
import { initGraficoObitos, initGraficoObitosLog } from './Gráficos/Obitos.grafico.js';
import { start as startSerieTemporal } from './Dados/SerieTemporal.dados.js';

setDisplayAltasMedicas();
setDisplayConfirmados();
setDisplayObitos();
setDisplayMortalidade();
initBaseMap();
initMalhaPrincipal();
initGraficoObitos('grafico_obitos');
startSerieTemporal();

let btnLogarithmicToggler = document.getElementById('btn-obitos-log');
btnLogarithmicToggler.addEventListener("click", () => {
    if (btnLogarithmicToggler.classList.contains('isClicked')) {
        initGraficoObitos('grafico_obitos');
        btnLogarithmicToggler.classList.remove('isClicked');
        document.getElementById('titulo-grafico-obitos').innerText = "Número de óbitos por semana epidemiológica"
        btnLogarithmicToggler.innerText = 'Escala logarítmica';
    } else {
        btnLogarithmicToggler.classList.add("isClicked");
        initGraficoObitosLog('grafico_obitos')
        document.getElementById('titulo-grafico-obitos').innerText = "Número de óbitos por semana epidemiológica em escala logarítimica"
        btnLogarithmicToggler.innerText = 'Escala padrão';
    }
});

let btnHeatMapToggler = document.getElementById('btn-mapa-de-calor');
btnHeatMapToggler.addEventListener("click", () => {
    if (btnHeatMapToggler.classList.contains('isClicked')) {
        covid19Map.removeLayer(heat);
        btnHeatMapToggler.classList.remove('isClicked');
        btnHeatMapToggler.innerText = 'Mostrar Mapa de Calor';
    } else {
        btnHeatMapToggler.classList.add("isClicked");
        renderHeatMap()
        btnHeatMapToggler.innerText = 'Esconder Mapa de Calor';
    }
});