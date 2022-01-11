export function renderWitches(witch) {
    const witchDiv = document.createElement('div');
    const a = document.createElement('a');
    const witchType = document.createElement('p');
    const witchImg = document.createElement('img');

    witchDiv.classList.add('witch-hold');

    witchType.textContent = witch.type;

    witchImg.src = `./assets/witch-${witch.type}-trans.png`;
    a.href = `./details/?id=${witch.id}`;

    witchDiv.append(witchImg, witchType);

    a.append(witchDiv);

    return a;
}


export function renderTypeDetail(witch) {
    const typeDiv = document.createElement('div');
    const typeInfo = document.createElement('div');
    const typeName = document.createElement('p');
    const typePowerLevel = document.createElement('p');
    const typePowerType = document.createElement('p');
    const typeUses = document.createElement('p');
    const typeImg = document.createElement('img');

    typeDiv.classList.add('type-hold');

    typeName.classList.add('type');
    typeName.textContent = witch.type;

    typeInfo.classList.add('power-type');
    typeInfo.textContent = `Power type: ${witch.power} Power level: ${witch.power_level}`;

    typeUses.classList.add('uses');
    typeUses.textContent = witch.uses;

    typeImg.src = `../assets/witch-${witch.type}-trans.png`;

    typeInfo.append(typePowerType, typePowerLevel);

    typeDiv.append(typeImg, typeName, typeInfo, typeUses);

    return typeDiv;
}