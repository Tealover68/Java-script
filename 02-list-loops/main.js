// movies — двовимірний масив: кожен рядок — один фільм.
// Індекси всередині рядка: 
// [0] - назва, 
// [1] - картинка, 
// [2] - опис, 
// [3] - оцінка

const movies = [
	[
        'Пірати Карибського моря: Прокляття Чорної Перлини', 
        '1.jpg', 
        'Американський фантастичний пригодницький фільм 2003 року...', 
        8.1
    ],
	['Пірати Карибського моря: Скриня мерця', '2.jpg', 'Американський пригодницький фільм 2006 року компанії...', 7.4],
	['Пірати Карибського моря: На краю світу', '3.jpg', 'Американський пригодницький фільм 2007 року...', 7.1],
	['Пірати Карибського моря: На дивних берегах', '4.jpg', 'Американська пригодницька стрічка 2011 року...', 6.6],
	['Пірати Карибського моря: Помста Салазара', '5.jpg', 'Американський пригодницький фільм-фентезі...', 6.5],
];

console.log('Кількість фільмів: ', movies.length);
console.log("Назва першого фільму: ", movies[0][0]);

for (let i = 0; i < movies.length; i++) {
    console.log(i, '------------------');
    for (let j = 0; j < movies[i].length; j++) {
        if (j !== 2) console.log(movies[i][j]);
    }
}

let notAnswerd = true;
let selectedStyle = 'dark';

// завдання 2
while (notAnswerd) {
    console.log(notAnswerd);

    const userChois = prompt('Виберіть тему: свтіла - 1 / темна - 2');

    if (!userChois) {
        break
    }

    switch (userChois.trim()) {
        case "1":
            selectedStyle = 'light';
            notAnswerd = false;
            break;
        case "2":
            selectedStyle = 'dark';
            notAnswerd = false;
            break;
        default:
            alert("Ви ввели неправельний варіант");
    }
}

// завдання 3
let sum = 0;
let index = 0;

while (index < movies.length){
    sum += movies[index][3];
    index ++;    
}
const average = (sum / movies.length).toFixed(1);
console.log('Середній бал:', average);

// завдання 4
bestMovies = [];
index = 0;

while (index < movies.length){
    if (movies[index][3] >= 7){
        bestMovies.push(movies[index][0]);
    }
    index ++;    
}
console.log(bestMovies);

// завдання 5
let header = `
    <header class='${selectedStyle}'> 
        <h1>Пірати карибського моря</h1>
        <ul class='moviesList'>
`;

for (let i = 0; i < movies.length; i++){
    header += `
        <li>
            <img src='${movies[i][1]}' />
            <br>
            <a href='#${i}' class='${selectedStyle}Link'>
                ${movies[i][0]}
            </a>
        </li>
    `;
}

header += `</ul></header>`;


let description = `
	<section class="">
		<h2>Опис фільмів</h2>
`;

for (let i = 0; i < movies.length; i++){
    description +=`
        <h3>${movies[i][0]}</h3>
		<p class="rating">Оцінка: ${movies[i][3]}</p>
		<p class="description">${movies[i][2]}</p>
    `;
}

description += `
		<p class="stats">
			Середня оцінка ${average} 
            <br> 
            Фільми з оцінкою від 7: ${bestMovies.join('; ')}
		</p>
    </section>`;

document.getElementById('movies').innerHTML = header + description;
