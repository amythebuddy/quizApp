const container = document.getElementById("container");
const title = document.getElementById('title');

const questionsAndAnswers = {
    '1': ['In what year was the internet opened to the public?', '1993'],
    '2': ['What is the meaning of "fn" on your computer keyboard?', 'function'],
    '3': ['Who was the first computer programmer?', 'Ada Lovelace'],
    '4': ['Amazon (company) was founded in which US state', 'Washington'],
    '5': ['Which country has the largest population in the world?','India'],
    '6': ['What capital has the longest name in the world?', 'Bangkok'],
    '7': ['Which country has the largest desert?', 'Morocco'],
    '8': ['What continent is the biggest?', 'Asia'],
    '9': ['What is the best-selling video game ever as of 2023', 'Minecraft'],
    '10': ['What is the capital of Vietnam?', 'Ha Noi']
};

document.getElementById("right").onclick = function() {
    document.getElementById("right").classList.add('correct');
    next();
};
function next(){
    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next ->";
    nextBtn.onclick = showQuestion();
    container.appendChild(nextBtn);
}

function showQuestion(){
    title.innerText = questionsAndAnswers[1][0];
    let firstAnswer = document.createElement('button');
    let secondAnswer = document.createElement('button');
    let thirdAnswer = document.createElement('button');
    let fourthAnswer = document.createElement('button');

    firstAnswer.innerText = '1993';
    secondAnswer.innerText = '1994';
    thirdAnswer.innerText = '1991';
    fourthAnswer.innerText = '1992';

    
}