export function renderWitches(witch) {
    const witchDiv = document.createElement('div');
    const witchType = document.createElement('p');
    const witchPowerLevel = document.createElement('p');
    const witchPowerType = document.createElement('p');

    witchType.textContent = witch.type;
    witchPowerLevel.textContent = witch.power_level;
    witchPowerType.textContent = witch.power_type;

    witchDiv.append(witchType, witchPowerLevel, witchPowerType);

    return witchDiv;
}