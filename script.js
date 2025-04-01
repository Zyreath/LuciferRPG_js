import { addBreak, dBreak, randomNumber } from './utils.js';

const characterName = prompt("LuciferRPG 2025! Please enter your character's name: ");

let characterLevel = 1;

let currentHealth = 2;
let maxHealth = 15;

let attackValue = 3;
let defenseValue = 2;

let potionCount = 2;
let potionValue = 5;

const headingText = document.getElementById("heading");
headingText.innerText = 'Lucifer';

const subheading = document.createElement("h2");
const textNode = document.createTextNode("A Diablo-style RPG: Text Version");
document.body.appendChild(subheading.appendChild(textNode));

const characterHeading = document.createElement("h3");
characterHeading.innerText = 'Character Sheet';
document.body.appendChild(characterHeading);

const characterNameLbl = document.createElement("label");
characterNameLbl.innerText = "Character Name: ";
document.body.appendChild(characterNameLbl);

const characterNameContainer = document.createElement("label");

if (characterName != null) {
    characterNameContainer.innerText = `${characterName}`;
    document.body.appendChild(characterNameContainer);
    }
else {
    characterNameContainer.innerText = 'Player 1';
    document.body.appendChild(characterNameContainer);
}

addBreak();

const characterHealthLbl = document.createElement("label");
characterHealthLbl.innerText = `Health: ${maxHealth} \\ ${currentHealth}`;
document.body.appendChild(characterHealthLbl);

addBreak();

const characterLevelLbl = document.createElement("label");
characterLevelLbl.innerText = `Level: ${characterLevel}`;
document.body.appendChild(characterLevelLbl);

addBreak();

const characterAttacklbl = document.createElement("label");
characterAttacklbl.innerText = `Attack: ${attackValue}`;
document.body.appendChild(characterAttacklbl);

addBreak();

const characterDefenselbl = document.createElement("label");
characterDefenselbl.innerText = `Defense: ${defenseValue}`;
document.body.appendChild(characterDefenselbl);

const inventoryHeading = document.createElement("h3");
inventoryHeading.innerText = 'Inventory';
document.body.appendChild(inventoryHeading);

const potionslbl = document.createElement("label");
potionslbl.innerText = `Potions: ${potionCount}`;
document.body.appendChild(potionslbl);

const optionsHeading = document.createElement("h3");
optionsHeading.innerText = 'Actions';
document.body.appendChild(optionsHeading);

// 25 monster, 25 find potion, 25 find gold, 20 nothing, 5 hidden spring
const rollButton = document.createElement("button");
rollButton.addEventListener('click', () => {
    let rollValue = randomNumber();
    if (rollValue == 0) {
        while (rollValue == 0) {
            rollValue = randomNumber();
        }
    }

    const events = [
        {
            range: [1, 5],
            action: () => {
                textOutput.value += "You find a hidden spring. Gain +10 hp.\n\n";
                currentHealth += 10;
                if (currentHealth > maxHealth) {
                    currentHealth = maxHealth;
                }
                characterHealthLbl.innerText = `Health: ${maxHealth} \\ ${currentHealth}`;
            }
        },
        {
            range: [6, 30],
            action: () => {
                textOutput.value += "You run into a fearsome monster.\n\n";
                // Add monster encounter logic here
            }
        },
        {
            range: [31, 50],
            action: () => {
                textOutput.value += "You walk for quite a while, but nothing happens.\n\n";
            }
        },
        {
            range: [51, 75],
            action: () => {
                textOutput.value += "You find a potion and add it to your bag.\n\n";
                potionCount += 1;
                potionslbl.innerText = `Potions: ${potionCount}`;
            }
        },
        {
            range: [76, 100],
            action: () => {
                textOutput.value += "You find some gold.\n\n";
                // Add logic for finding gold here
            }
        }
    ];

    let eventTriggered = false;
    for (const event of events) {
        const [min, max] = event.range;
        if (rollValue >= min && rollValue <= max) {
            event.action(); // Execute the action function
            eventTriggered = true;
            break;
        }
    }

    if (!eventTriggered) {
        textOutput.value += `${rollValue}: Error during roll. Event not found!\n\n`;
    }
});
rollButton.innerText = 'Roll';
document.body.appendChild(rollButton);

const potionButton = document.createElement("button");
potionButton.addEventListener('click', () => {
    console.log('Button clicked')
    if (potionCount > 0 && currentHealth != maxHealth) {
        console.log('Tests passed!')
        currentHealth += potionValue;
        if (currentHealth > maxHealth) {
            currentHealth = maxHealth;
        }
        potionCount -= 1;
        characterHealthLbl.innerText = `Health: ${maxHealth} \\ ${currentHealth}`;
        potionslbl.innerText = `Potions: ${potionCount}`;
        textOutput.value += `You used a healing potion. You have ${potionCount} left.\n\n`;
    } else if (currentHealth == maxHealth) {
        textOutput.value += "You are already at full health!\n\n";
    } else {
        textOutput.value += "You don\'t have any potions left!\n\n";
    }
});
potionButton.innerText = 'Use Potion';
document.body.appendChild(potionButton);

let outputHistory = [];

const controlsHeading = document.createElement("h3");
controlsHeading.innerText = 'Controls';
document.body.appendChild(controlsHeading);

const clearHistoryBtn = document.createElement("button");
clearHistoryBtn.addEventListener('click', () => {
    outputHistory = [];
    textOutput.value = '';
    textOutput.value += "History has been succesfully cleared.\n\n";
});
clearHistoryBtn.innerText = 'Clear History';
document.body.appendChild(clearHistoryBtn);

dBreak();

const textOutput = document.createElement("textarea");
document.body.appendChild(textOutput);

/*
const currentRollLabel = document.createElement("label");
currentRollLabel.innerText = `Current Roll: ${currentRoll}`;
document.body.appendChild(currentRollLabel);

dBreak();

const previousRollLabel = document.createElement("label");
previousRollLabel.innerText = `Previous Roll: ${previousRoll}`;
document.body.appendChild(previousRollLabel);

dBreak();

const randomNumberLbl = document.createElement("label");
document.body.appendChild(randomNumberLbl);
*/