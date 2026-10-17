console.log("Запуск зовнішнього скрипта ...");

// alert, prompt

// alert("Вітаємо у грі 'Таємниці коду'!");


// завдання 3
let heroName = "Артур";
//heroName = prompt("Введіть імя героя:");
//console.log(heroName);
let level = 1;
let health = 100;
const maxInventorySize = 50;
let isHardcore = true
let currentWeapon = {};
let magicSkill;

console.log(
    typeof currentWeapon, 
    typeof magicSkill,
    typeof health,
    typeof isHardCore
);

//
if (isHardcore) {
    console.log(heroName);
}


let isAdult = false;
isHardcore = false

if (isHardcore) {
    console.log(heroName);
    health = 10;
} else if (!isAdult) {
    health = 200;
} else {
    health = 100;
}
console.log(health);

// завдання 8
let htmlCard = `
  <div class="card">
    <h2>🗡️ ${heroName}</h2>
    <p>Статус: ${isHardcore ? "Хардкор" : "Стандарт"}</p>
    <ul>
      <li>Рівень: ${level}</li>
      <li>Здоров'я: ${health} HP</li>
    </ul>
  </div>
`;

//document.body.innerHTML = htmlCard;
let mainDiv = document.getElementById('main-div');
mainDiv.innerHTML = htmlCard;

