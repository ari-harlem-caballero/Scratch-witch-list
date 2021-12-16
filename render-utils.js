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
    a.href = `./detail/?id={witch.id}`;

    witchDiv.append(witchType, witchPowerLevel, witchPowerType, witchImg);

    a.append(witchDiv);

    return a;
}