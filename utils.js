export function addBreak() {
    const breakVar = document.createElement('br');
    document.body.appendChild(breakVar);
}

export function dBreak() {
    const b1 = document.createElement('br');
    const b2 = document.createElement('br');
    document.body.appendChild(b1);
    document.body.appendChild(b2);
}

export function randomNumber() {
    return Math.floor(Math.random() * 100);
}