let cards = document.querySelector('.list__films');

let arrFilms = [
   [1, `src="./img/достать ножи.jpg" alt="Достать ножи"`, "Достать ножи", '2019г', 23],
   [2, `src="./img/лучшее предложение.jpg" alt="Достать ножи"`, "Лучшее предложение", '2013г', 23],
   [3, `src="./img/секс по дружбе.jpg" alt="Секс по дружбе"`, "Секс по дружбе", '2011г', 23],
   [4, `src="./img/не звезди.webp" alt="Достать ножи"`, "Не звезди!", '2022г', 23],
   [5, `src="./img/суперчел.jpg" alt="Достать ножи"`, "Superчел", '2021г', 23],
   [6, `src="./img/супернянь.jpg" alt="Достать ножи"`, "Superнянь", '2014г', 23],
   [7, `src="./img/супернянь 2.jpg" alt="Достать ножи"`, "Superнянь 2", '2015г', 23],
   [8, `src="./img/супералиби.jpg" alt="Достать ножи"`, "Superалиби", '2017г', 23],
]

let arrText = [
   [`style="color: #2e2e2e; background-color: #CD5334cc; font-family: monospace;"`],
   [`style="color: #2e2e2e; background-color: #17BEBBcc; font-family: monospace;"`]
]

for (i = arrFilms.length - 1; i >= 0; i--) {
   cards.insertAdjacentHTML(
       "afterbegin", 
       `
       <div class="film__card">
       <a href="#"><img class="photo" ${arrFilms[i][1]}></a>
           <div ${arrText[i % 2]} class="film__card_text">
               <p style="font-size: 25px;">${arrFilms[i][2]}</p>
               <p style="font-weight: 500;">Год выпуска: ${arrFilms[i][3]}</p>
               <p style="font-weight: 500;">Рейтинг: ${arrFilms[i][4]}</p>
           </div>
       </div>
       `
   )
}