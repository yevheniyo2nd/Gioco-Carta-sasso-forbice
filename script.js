let userChoice = '';
let result = '';

// Элементы
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');

// Результаты
const user = document.querySelector('.user-result');
const vs = document.querySelector('.vs-result');
const ai = document.querySelector('.ai-result');

// Выбор элемента
paper.addEventListener('click', () => {
    userChoice = 'paper';
    console.log(`Hai scelto ${userChoice}`);
    // Изменение стиля элементов
    paper.style.background = 'rgb(91, 196, 115)';
    rock.style.background = 'gray';
    scissors.style.background = 'gray';
    // Изменение текста результата
    document.getElementById('user-result-id').textContent = userChoice;
});

rock.addEventListener('click', () => {
    userChoice = 'rock';
    console.log(`Hai scelto ${userChoice}`);
    // Изменение стиля элементов
    paper.style.background = 'gray';
    rock.style.background = 'rgb(91, 196, 115)';
    scissors.style.background = 'gray';
    // Изменение текста результата
    document.getElementById('user-result-id').textContent = userChoice;
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    console.log(`Hai scelto ${userChoice}`);
    // Изменение стиля элементов
    paper.style.background = 'gray';
    rock.style.background = 'gray';
    scissors.style.background = 'rgb(91, 196, 115)';
    // Изменение текста результата
    document.getElementById('user-result-id').textContent = userChoice;
});

// Игра
function play() {
    const choices = ['rock', 'paper', 'scissors'];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('ai-result-id').textContent = aiChoice;
    
    if (userChoice === aiChoice) {
        result = 'Pari!';
        // Изменение текста результата
        document.getElementById('vs-result-id').textContent = '=';
        // Обновление очков
        document.getElementById('user-scores-id').textContent++;
        document.getElementById('ai-scores-id').textContent++;
        // Изменение стиля результата
        user.style.width = '40%';
        vs.style.width = '20%';
        ai.style.width = '40%';
    } else if (
        (userChoice === 'rock' && aiChoice === 'scissors') ||
        (userChoice === 'scissors' && aiChoice === 'paper') ||
        (userChoice === 'paper' && aiChoice === 'rock')
    ) {
        result = 'Hai vinto tu!';
        // Изменение текста результата
        document.getElementById('vs-result-id').textContent = '>';
        // Обновление очков
        document.getElementById('user-scores-id').textContent++;
        // Изменение стиля результата
        user.style.width = '50%';
        vs.style.width = '30%';
        ai.style.width = '20%';
    } else {
        result = 'Tu hai perso';
        // Изменение текста результата
        document.getElementById('vs-result-id').textContent = '<';
        // Обновление очков
        document.getElementById('ai-scores-id').textContent++;
        // Изменение стиля результата
        user.style.width = '20%';
        vs.style.width = '30%';
        ai.style.width = '50%';
    }
    console.log(`Tu hai scelto ${userChoice}\nAi ha scelto ${aiChoice} \n${result}`);
}

// Кнопка "Играть"
const gioca = document.querySelector('.play-btn');
gioca.addEventListener('click', () => {
    if (userChoice !== '') {
        play();
    } else {
        console.log('Scegli la tua mossa');
    }
});

// Кнопка "Рестарт"
const rigioca = document.querySelector('.reset-btn');
rigioca.addEventListener('click', () => {
    console.log('Hai iniziato la nuova partita');
    // Сброс текста результата
    document.getElementById('user-result-id').textContent = '';
    document.getElementById('vs-result-id').textContent = '';
    document.getElementById('ai-result-id').textContent = '';
    // Сброс очков
    document.getElementById('user-scores-id').textContent = 0;
    document.getElementById('ai-scores-id').textContent = 0;
    // Сброс стиля элементов
    paper.style.background = 'gray';
    rock.style.background = 'gray';
    scissors.style.background = 'gray';
    // Сброс стиля результата
    user.style.width = '30%';
    vs.style.width = '40%';
    ai.style.width = '30%';
    // Сброс выбора пользователя
    userChoice = '';
});
