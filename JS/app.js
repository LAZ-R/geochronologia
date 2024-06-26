import  * as LAZR from './lazR/lazR.js';
import { EONS } from './data/eons.js';

const titleElement = document.getElementById('title');
titleElement.innerHTML = `GÉOCHRONOLOGIA`;

LAZR.DOM.setViewportSize();

const goToHome = () => {
    window.location = './index.html';
}
window.goToHome = goToHome;

//***************************************** */

const body = document.getElementById('body');

EONS.forEach(eon => {
    const eonDiv = LAZR.DOM.createElement('div', eon.name, 'container eon-container', ``);

    const eonTopDiv = LAZR.DOM.createElement('div', '', 'container__top-area clickable', `
        <h1>${eon.name}</h1>
        <p class="dates-container">de  ${eon.start_date}<br>
        à  ${eon.end_date}</p>`);

    eonTopDiv.onclick = () => {
        eonDiv.style.minHeight = eonDiv.style.minHeight == "fit-content" ? "115px": "fit-content";
        eonDiv.style.height = eonDiv.style.height == "fit-content" ? "115px": "fit-content";
        eonDiv.style.overflowY = eonDiv.style.overflowY == "visible" ? "hidden": "visible";
    }

    const eonDescDiv = LAZR.DOM.createElement('div', '', 'container__description-area clickable', ``);
    if (eon.description != '') {
        eonDescDiv.innerHTML = `
            <h6>Description</h6>
            <p>${eon.description}</p>`;
        eonDescDiv.onclick = () => {   
            eonDescDiv.style.height = eonDescDiv.style.height == "fit-content" ? "40px": "fit-content";
            eonDescDiv.style.overflowY = eonDescDiv.style.overflowY == "visible" ? "hidden": "visible";
        }
    }
 
    eonDiv.appendChild(eonTopDiv);
    eonDiv.appendChild(eonDescDiv);

    if (eon.eras !== undefined) {

        const eonMoreDiv = LAZR.DOM.createElement('div', '', 'container__more-area', ``);

        eon.eras.forEach(era => {
            const eraDiv = LAZR.DOM.createElement('div', era.name, 'container era-container', ``);

            const eraTopDiv = LAZR.DOM.createElement('div', '', 'container__top-area clickable', `
                <h2>${era.name}</h2>
                <p class="dates-container">de  ${era.start_date}<br>
                à  ${era.end_date}</p>`);

            eraTopDiv.onclick = () => {
                eraDiv.style.minHeight = eraDiv.style.minHeight == "fit-content" ? "105px": "fit-content";
                eraDiv.style.height = eraDiv.style.height == "fit-content" ? "105px": "fit-content";
                eraDiv.style.overflowY = eraDiv.style.overflowY == "visible" ? "hidden": "visible";
            }

            const eraDescDiv = LAZR.DOM.createElement('div', '', 'container__description-area clickable', ``);
            if (era.description != '') {
                eraDescDiv.innerHTML = `
                    <h6>Description</h6>
                    <p>${era.description}</p>`;
                eraDescDiv.onclick = () => {   
                    eraDescDiv.style.height = eraDescDiv.style.height == "fit-content" ? "40px": "fit-content";
                    eraDescDiv.style.overflowY = eraDescDiv.style.overflowY == "visible" ? "hidden": "visible";
                }
            }

            eraDiv.appendChild(eraTopDiv);
            eraDiv.appendChild(eraDescDiv);
    
            if (era.periods !== undefined) {

                const eraMoreDiv = LAZR.DOM.createElement('div', '', 'container__more-area', ``);
    
                era.periods.forEach(period => {
                    const periodDiv = LAZR.DOM.createElement('div', period.name, 'container period-container', ``);

                    const periodTopDiv = LAZR.DOM.createElement('div', '', 'container__top-area clickable', `
                        <h3>${period.name}</h3>
                        <p class="dates-container">de  ${period.start_date}<br>
                        à  ${period.end_date}</p>`);
        
                    periodTopDiv.onclick = () => {
                        periodDiv.style.minHeight = periodDiv.style.minHeight == "fit-content" ? "95px": "fit-content";
                        periodDiv.style.height = periodDiv.style.height == "fit-content" ? "95px": "fit-content";
                        periodDiv.style.overflowY = periodDiv.style.overflowY == "visible" ? "hidden": "visible";
                    }
                    const periodDescDiv = LAZR.DOM.createElement('div', '', 'container__description-area clickable', ``);
                    if (period.description != '') {
                        periodDescDiv.innerHTML = `
                            <h6>Description</h6>
                            <p>${period.description}</p>`;
                        periodDescDiv.onclick = () => {   
                            periodDescDiv.style.height = periodDescDiv.style.height == "fit-content" ? "40px": "fit-content";
                            periodDescDiv.style.overflowY = periodDescDiv.style.overflowY == "visible" ? "hidden": "visible";
                        }
                    }
   
                    periodDiv.appendChild(periodTopDiv);
                    periodDiv.appendChild(periodDescDiv);

                    if (period.series !== undefined) {
                        const periodMoreDiv = LAZR.DOM.createElement('div', '', 'container__more-area', ``);

                        period.series.forEach(serie => {
                            const serieDiv = LAZR.DOM.createElement('div', serie.name, 'container serie-container', ``);

                            const serieTopDiv = LAZR.DOM.createElement('div', '', 'container__top-area clickable', `
                                <h4>${serie.name}</h4>
                                <p class="dates-container">de  ${serie.start_date}<br>
                                à  ${serie.end_date}</p>`);
                
                            serieTopDiv.onclick = () => {
                                serieDiv.style.minHeight = serieDiv.style.minHeight == "fit-content" ? "90px": "fit-content";
                                serieDiv.style.height = serieDiv.style.height == "fit-content" ? "90px": "fit-content";
                                serieDiv.style.overflowY = serieDiv.style.overflowY == "visible" ? "hidden": "visible";
                            }

                            const serieDescDiv = LAZR.DOM.createElement('div', '', 'container__description-area clickable', ``);
                            if (serie.description != '') {
                                serieDescDiv.innerHTML = `
                                    <h6>Description</h6>
                                    <p>${serie.description}</p>`;
                                serieDescDiv.onclick = () => {   
                                    serieDescDiv.style.height = serieDescDiv.style.height == "fit-content" ? "40px": "fit-content";
                                    serieDescDiv.style.overflowY = serieDescDiv.style.overflowY == "visible" ? "hidden": "visible";
                                }
                            }

                            serieDiv.appendChild(serieTopDiv);
                            serieDiv.appendChild(serieDescDiv);
            
                            if (serie.stages !== undefined) {
                                const serieMoreDiv = LAZR.DOM.createElement('div', '', 'container__more-area', ``);

                                serie.stages.forEach(stage => {
                                    const stageDiv = LAZR.DOM.createElement('div', stage.name, 'container stage-container', ``);

                                    const stageTopDiv = LAZR.DOM.createElement('div', '', 'container__top-area clickable', `
                                        <h5>${stage.name}</h5>
                                        <p class="dates-container">de  ${stage.start_date}<br>
                                        à  ${stage.end_date}</p>`);
                        
                                    stageTopDiv.onclick = () => {
                                        stageDiv.style.minHeight = stageDiv.style.minHeight == "fit-content" ? "85px": "fit-content";
                                        stageDiv.style.height = stageDiv.style.height == "fit-content" ? "85px": "fit-content";
                                        stageDiv.style.overflowY = stageDiv.style.overflowY == "visible" ? "hidden": "visible";
                                    }
        
                                    const stageDescDiv = LAZR.DOM.createElement('div', '', 'container__description-area clickable', ``);
                                    if (stage.description != '') {
                                        stageDescDiv.innerHTML = `
                                            <h6>Description</h6>
                                            <p>${stage.description}</p>`;
                                        stageDescDiv.onclick = () => {   
                                            stageDescDiv.style.height = stageDescDiv.style.height == "fit-content" ? "40px": "fit-content";
                                            stageDescDiv.style.overflowY = stageDescDiv.style.overflowY == "visible" ? "hidden": "visible";
                                        }
                                    }
                                    
                                    stageDiv.appendChild(stageTopDiv);
                                    stageDiv.appendChild(stageDescDiv);

                                    serieMoreDiv.appendChild(stageDiv);
                                });
                                serieDiv.appendChild(serieMoreDiv);
                            }
                            periodMoreDiv.appendChild(serieDiv);
                        });
                        periodDiv.appendChild(periodMoreDiv);
                    }
                    eraMoreDiv.appendChild(periodDiv);
                });
                eraDiv.appendChild(eraMoreDiv);
            }
            eonMoreDiv.appendChild(eraDiv);
        });
        eonDiv.appendChild(eonMoreDiv);
    }
    body.appendChild(eonDiv);
});