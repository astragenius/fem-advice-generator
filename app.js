
const btn = document.querySelector('.advice-button');


async function getAdvice() {
    const randomId = getRandomId();
    const respond = await fetch(`https://api.adviceslip.com/advice/${randomId}`)
    const message = await respond.json();
    console.log(message)
    renderAdvice(message)

}

function getRandomId() {
    return Math.floor((Math.random() * 255) + 1);
}

function renderAdvice(obj) {

    const head = document.getElementById('adviceHeading')
    const body = document.getElementById('adviceText');
    
    head.textContent = `id: ${obj.slip.id}`
    body.textContent = obj.slip.advice;


}

btn.addEventListener('click', getAdvice);

