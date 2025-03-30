import { addBreak, dBreak, randomNumber } from './utils.js';

const characterName = prompt("LuciferRPG 2025! Please enter your character's name: ");

let currentHealth = 5;
let maxHealth = 15;

let attackValue = 3;
let defenseValue = 2;

let potionCount = 2;
let potionValue = 5;

const headingText = document.getElementById("heading");
headingText.innerText = 'Lucifer';

const firstParagraph = document.createElement("h2");
const textNode = document.createTextNode("A Diablo-style RPG: Text Version");
document.body.appendChild(firstParagraph.appendChild(textNode));

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

let currentRoll = 0;
let previousRoll = 0;


// 5 events - monster 50%, find potion 15%, find gold 15%?
// /
// , find a healing spring 5%, nothing 15%
const rollButton = document.createElement("button");
rollButton.addEventListener('click', () => {
    let rollValue = randomNumber();
    previousRoll = currentRoll;
    currentRoll = rollValue;
    currentRollLabel.innerText = `Current Roll: ${currentRoll}`;
    previousRollLabel.innerText = `Previous Roll: ${previousRoll}`;
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
        alert("You are already at full health!");
        textOutput.innerText += "You are already at full health!";
    } else {
        alert("You don\'t have any potions left!");
        textOutput.innerText += "You don\'t have any potions left!";
    }
});
potionButton.innerText = 'Use Potion';
document.body.appendChild(potionButton);

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