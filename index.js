Array.prototype.sample = function() {
    return this[Math.floor(Math.random()*this.length)];
}

const styles = ['Upsi', 'Antsa', 'Hysse', 'Backhand', 'Fore'];
const discs = ['Putteri', 'Midari', 'Väylädriver', 'Pituusdriver'];

const btnNext = document.querySelector('#next');
const btnClear = document.querySelector('#clear');
const ulElm = document.querySelector('#throws');

btnNext.innerText = "Next";
btnNext.addEventListener("click", setRandomThrow)

btnClear.innerText = "Clear";
btnClear.addEventListener("click", clearThrows)

function clearThrows(event) {
    event.preventDefault();
    while(ulElm.firstChild) {
        ulElm.removeChild(ulElm.firstChild);
    }
}

function setRandomThrow(event) {
    event.preventDefault();
    const randomizedShot = `Heittotyyli: ${styles.sample()} --- kiekko: ${discs.sample()}`
    
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.appendChild(document.createTextNode(randomizedShot));

    ulElm.appendChild(li);
}