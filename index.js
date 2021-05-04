Array.prototype.sample = function() {
    return this[Math.floor(Math.random()*this.length)];
}

const styles = ['Upsi', 'Antsa', 'Hysse', 'Backhand', 'Fore'];
const discs = ['Putteri', 'Midari', 'Väylädriver', 'Pituusdriver'];

const btn = document.querySelector('#next');
const ulElm = document.querySelector('#throws');

btn.innerText = "Next throw";
btn.addEventListener("click", setRandomThrow)



function setRandomThrow(event) {
    event.preventDefault();
    const randomizedShot = `Heittotyyli: ${styles.sample()} --- kiekko: ${discs.sample()}`
    
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(randomizedShot));
    ulElm.appendChild(li);
}