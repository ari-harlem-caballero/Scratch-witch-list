// import functions and grab DOM elements
import { getWitches } from './fetch-utils.js';
import { renderWitches } from './render-utils.js';
// let state
const witchContainer = document.querySelector('#witch-container');

window.addEventListener('load', async() => {
    const witches = await getWitches();

    for (let witch of witches) {
        const witchEl = renderWitches(witch);

        witchContainer.append(witchEl);
    }
});