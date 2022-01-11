import { getWitchType } from '../fetch-utils.js';
import { renderTypeDetail } from '../render-utils.js';

const typeDetailContainer = document.getElementById('type-detail-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const witch = await getWitchType(id);

    const witchTypeEl = renderTypeDetail(witch);

    typeDetailContainer.append(witchTypeEl);
});