const container = document.getElementById("container");
const funFact = document.getElementById('funFact');
const title = document.getElementById('title');
const buttons = document.querySelectorAll('button');
let questionNumber = 0;
let score = 0;
let wrong = 0;

const questionsAndAnswers = [
    {
        question: 'What is the capital of Vietnam?',
        options: [
            {"Hanoi" : true,
            fact : 'Hanoi, the capital of Vietnam, is known for its centuries-old architecture and a rich culture with Southeast Asian, Chinese and French influences.'},
            {"Ho Chi Minh City" : false,
            fact : 'Ho Chi Minh City is the largest city, business and financial hub of Vietnam. There are plenty of museums showcasing the country\'s dark wartime history and classic colonial architecture built by former French rulers.'},
            {"Vientiane" : false,
            fact : 'Vientiane, Laos\' national capital, mixes French-colonial architecture with Buddhist temples such as the golden, 16th-century Pha That Luang, which is a national symbol.'},
            {"Saigon" : false,
            fact : 'Saigon\'s name was changed to Ho Chi Minh City, to honor the revolutionary leader who had declared independence back in 1945.'}
        ]
    },
    {
        question: 'In what year was the internet opened to the public?',
        options: [
            {"1991" : false},
            {"1992" : false},
            {"1993" : true,
            fact: 'On April 30, 1993, the World Wide Web was released into the public domain. It revolutionized the internet and allowed users to create websites filled with graphics, audio and hyperlinks.'},
            {"1994" : false}
        ]
    },
    {
        question: 'What is the meaning of "fn" on your computer keyboard?',
        options: [
            {"Find" : false},
            {"Function" : true},
            {"Fonts" : false},
            {"Flunk" : false}
        ]
    },
    {
        question: 'Who was the first computer programmer?',
        options: [
            {"Tim Berners-Lee" : false},
            {"Katherine Johnson" : false},
            {"Margaret Hamilton" : false},
            {"Ada Lovelace" : true}
        ]
    }, 
    {
        question: 'Amazon (company) was founded in which US state',
        options: [
            {"Washington" : true},
            {"Califronia" : false},
            {"New York" : false},
            {"Texas" : false}
        ]
    }, 
    {
        question: 'Which country has the largest population in the world?',
        options: [
            {"China" : false},
            {"India" : true},
            {"United States" : false},
            {"Indonesia" : false}
        ]
    }, 
    {
        question : 'What city has the longest name in the world?',
        options: [
            {"Andorra La Vella" : false},
            {"Llanfairpwll" : false},
            {"Bangkok" : true},
            {"Taumata" : false}
        ]
    }, 
    {
        question: 'Which country owns Greenland?',
        options: [
            {"Denmark" : true},
            {"Sweden" : false},
            {"Finland" : false},
            {"Netherlands" : false}
        ]
    }, 
    {
        question: 'What continent is the biggest?',
        options: [
            {"North America" : false},
            {"New York" : false},
            {"Africa" : false},
            {"Asia" : true}
        ]
    }, 
    {
        question: 'What is the best-selling video game ever of all time?',
        options: [
            {"Wii Sports" : false},
            {"Tetris" : true},
            {"Minecraft" : false},
            {"Grand Theft Auto V" : false}
        ]
    }
];

function loadedQuestion(questionNumber){
    //showing what question we are on
    let questionInfo = questionsAndAnswers[questionNumber];
    
    // if the question number reaches 10 then show the score
    // else continue with the question
    if(questionNumber > Object.keys(questionsAndAnswers).length - 1){
        title.innerText = `You got ${score}/10!`;
        buttons.forEach((button) => {
            button.remove();
        })
    } else {
        title.innerText = questionInfo.question;
    }

    for(let i = 0; i < questionInfo.options.length; i++){
        // showing the option on the button so the user can choose
        buttons[i].innerText = Object.keys(questionInfo.options[i])[0];
        
        // if the clicked button is correct, background color change to green and add 1 point
        buttons[i].onclick = function(){
            if(Object.values(questionInfo.options[i])[0] === true){
                buttons[i].classList.add('correct');
                score++;    
                let nextBtn = document.createElement("button");
                nextBtn.innerText = "Next ->";  
                container.appendChild(nextBtn); 

                nextBtn.onclick = function () {
                    //remove each of the answer color before moving on to the new question
                    buttons.forEach((element) => {
                        element.classList.remove('correct');
                        element.classList.remove('wrong');
                    });
                    loadedQuestion(++questionNumber);
                    nextBtn.remove();
                };
            } else {
                buttons[i].classList.add('wrong');
                wrong++;
                if(wrong === 1){ // only count the first wrong answer
                    score--;
                }
                wrong = 0;
            }
            funFact.innerText = Object.values(questionInfo.options[i])[1];
        }
    }
    
}

loadedQuestion(questionNumber);