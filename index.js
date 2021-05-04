Array.prototype.sample = function() {
    return this[Math.floor(Math.random()*this.length)];
}

const styles = ['Flat', 'Anhyzer', 'Hyzer', 'Backhand', 'Forehand', 'Overhand'];
const discs = ['Putter', 'Midrange', 'Fairway driver', 'Distance driver'];
let throwCount = 0;

const btnNext = document.querySelector('#next');
const btnClear = document.querySelector('#clear');
const ulElm = document.querySelector('#throws');

btnNext.innerText = "Next ";
btnNext.addEventListener("click", setRandomThrow)

btnClear.innerText = "Clear";
btnClear.addEventListener("click", clearThrows)

function clearThrows(event) {
    event.preventDefault();
    throwCount = 0;
    while(ulElm.firstChild) {
        ulElm.removeChild(ulElm.firstChild);
    }
}

function setRandomThrow(event) {
    event.preventDefault();
    throwCount++;
    const rndStyle = `${styles.sample()}` 
    const rndDisc = `${discs.sample()}`
    
    let h4Elm = document.createElement('h4');
    h4Elm.innerText = `Shot ${throwCount}:`

    let liStyle = document.createElement('li');
    liStyle.setAttribute('class', 'item');
    liStyle.appendChild(document.createTextNode(`${rndStyle} with ${rndDisc}`));

    ulElm.appendChild(h4Elm);
    ulElm.appendChild(liStyle);
}