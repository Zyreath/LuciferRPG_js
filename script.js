import { addBreak, dBreak, randomNumber } from './utils.js';

const characterName = prompt("LuciferRPG 2025! Please enter your character's name: ");

let characterLevel = 1;

let currentHealth = 15;
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

dBreak();
addBreak()

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
    const events = [
        {
            range: [1, 5],
            action: () => {
                textOutput.innerText += "You found a hidden spring. Gain 10+ hp.";
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
                textOutput.innerText += "You ran into a fearsome monster.";
                // Add monster encounter logic here
            }
        },
        {
            range: [31, 50],
            action: () => {
                textOutput.innerText += "You walk for quite a while, but nothing happens.";
            }
        },
        {
            range: [51, 75],
            action: () => {
                textOutput.innerText += "You found a potion and add it to your bag.";
                potionCount += 1;
                potionslbl.innerText = `Potions: ${potionCount}`;
            }
        },
        {
            range: [76, 100],
            action: () => {
                textOutput.innerText += "You find some gold.";
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
        textOutput.innerText += `${rollValue}: Error during roll. Event not found!`;
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
        textOutput.innerText += `You used a healing potion. You have ${potionCount} left.`;
    } else if (currentHealth == maxHealth) {
        textOutput.innerText += "You are already at full health!";
    } else {
        textOutput.innerText += "You don\'t have any potions left!";
    }
});
potionButton.innerText = 'Use Potion';
document.body.appendChild(potionButton);

dBreak();

let outputHistory = [];

const controlsHeading = document.createElement("h3");
controlsHeading.innerText = 'Controls';
document.body.appendChild(controlsHeading);

const clearHistoryBtn = document.createElement("button");
clearHistoryBtn.addEventListener('click', () => {
    outputHistory = [];
    textOutput.innerText += "History succesfully cleared.";
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