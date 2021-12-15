// import functions and grab DOM elements
import { getWitches } from './fetch-utils.js';
import { renderWitches } from './render-utils.js';
// let state
const witchContainer = document.querySelector('#witch-container');

window.addEventListener('load', async() => {
    const witchie = await getWitches();

    for (let witches of witchie) {
        const witchEl = renderWitches(witches);

        witchContainer.append(witchEl);
    }
});

getWitches();