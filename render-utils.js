export function renderWitches(witch) {
    const witchDiv = document.createElement('div');
    const a = document.createElement('a');
    const witchType = document.createElement('h3');
    const witchImg = document.createElement('img');

    witchDiv.classList.add('witch-hold');

    witchType.textContent = witch.type;

    witchImg.src = `./assets/witch-${witch.type}-trans.png`;
    a.href = `./details/?id=${witch.id}`;

    a.append(witchImg);
    
    witchDiv.append(a, witchType);

    return witchDiv;
}


export function renderTypeDetail(witch) {
    const typeDiv = document.createElement('div');
    const typeInfo = document.createElement('div');
    const typeName = document.createElement('h1');
    const typePowerLevel = document.createElement('p');
    const typePowerType = document.createElement('p');
    const typeUses = document.createElement('p');
    const typeImg = document.createElement('img');

    typeDiv.classList.add('type-hold');
    typeInfo.classList.add('power-info');

    typeName.classList.add('type');
    typeName.textContent = witch.type;
    
    typePowerType.classList.add('power-type');
    typePowerType.textContent = `Power type: ${witch.power_type}`; 

    typePowerLevel.classList.add('power-level')
    typePowerLevel.textContent = `Power level: ${witch.power_level}`;

    typeUses.classList.add('uses');
    typeUses.textContent = witch.uses;

    typeImg.src = `../assets/witch-${witch.type}-trans.png`;
    
    if (witch.id === 4) {
        const dropdown = document.createElement('select');
        const catOption = document.createElement('option');
        const batOption = document.createElement('option');
        const ratOption = document.createElement('option');
        const frogOption = document.createElement('option');

        dropdown.classList.add('dropdown');
        
        catOption.value = 'cat';
        catOption.textContent = 'cat';

        batOption.value = 'bat';
        batOption.textContent = 'bat';

        ratOption.value = 'rat';
        ratOption.textContent = 'rat';
        
        frogOption.value = 'frog';
        frogOption.textContent = 'frog';
        
        dropdown.append(catOption, batOption, ratOption, frogOption);
        
        dropdown.addEventListener('change', () => {
            
            typeImg.src = `../assets/witch-${dropdown.value}-trans.png`;
            
        });

        typeName.append(dropdown);
    }

    typeInfo.append(typePowerType, typePowerLevel);

    typeDiv.append(typeImg, typeName, typeInfo, typeUses);

    return typeDiv;
}