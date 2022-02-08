function makeRed(){
    document.body.style.backgroundColor = 'red';
}
const blueButton = document.getElementById('blue-button');
// console.log(blueButton);
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'yellow'
}
// green
const greenButton = document.getElementById('make-green');
greenButton.onclick = function (){
    document.body.style.backgroundColor = 'green'
}
// goldrod
const goldenButton = document.getElementById('make-goldrod');
goldenButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
// hotpink
const hotpinkButton = document.getElementById('make-hotpink');
hotpinkButton.addEventListener('click', function makepink(){
    document.body.style.backgroundColor = 'hotpink'
})
// lightblue

document.getElementById('make-lightblue').addEventListener('click', function (){
    document.body.style.backgroundColor = 'lightblue';
})