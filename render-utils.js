export function renderWitches(witch) {
    const witchDiv = document.createElement('div');
    const a = document.createElement('a');
    const witchType = document.createElement('p');
    const witchPowerLevel = document.createElement('p');
    const witchPowerType = document.createElement('p');
    const witchImg = document.createElement('img');

    witchDiv.classList.add('witch-hold');

    witchType.textContent = witch.type;
    witchPowerLevel.textContent = `Power level: ${witch.power_level}`;
    witchPowerType.textContent = `Power type: ${witch.power_type}`;

    witchImg.src = `./assets/witch-${witch.type}-trans.png`;
    a.href = `./detail/?id=${witch.id}`;

    witchDiv.append(witchType, witchPowerLevel, witchPowerType, witchImg);

    a.append(witchDiv);

    return a;
}


export function renderTypeDetail(details) {
    const typeDiv = document.createElement('div');
    const typeName = document.createElement('p');
    const typePowerLevel = document.createElement('p');
    const typePower = document.createElement('p');
    const typeUses = document.createElement('p');
    const typeImg = document.createElement('img');

    typeDiv.classList.add('type-hold');

    typeName.classList.add('name');
    typeName.textContent = details.name;

    typePowerLevel.classList.add('power-level');
    typePowerLevel.textContent = `Power level: ${details.power_level}`;

    typePower.classList.add('power');
    typePower.textContent = `Power type: ${details.power}`;

    typeUses.classList.add('uses');
    typeUses.textContent = details.uses;

    typeImg.src = `../assets/witch-${details.name}-trans`;

    typeDiv.append(typeName, typePowerLevel, typePower, typeUses, typeImg);

    return typeDiv;
}