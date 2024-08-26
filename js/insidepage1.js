

var btn1 = document.querySelector('#green1');
var btn2 = document.querySelector('#red1');

btn1.addEventListener('click', function () {

    if (btn2.classList.contains('red')) {
        btn2.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn2.addEventListener('click', function () {

    if (btn1.classList.contains('green')) {
        btn1.classList.remove('green');

    }
    this.classList.toggle('red');
});
var btn3 = document.querySelector('#green2');
var btn4 = document.querySelector('#red2');

btn3.addEventListener('click', function () {

    if (btn4.classList.contains('red')) {
        btn4.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn4.addEventListener('click', function () {

    if (btn3.classList.contains('green')) {
        btn3.classList.remove('green');

    }
    this.classList.toggle('red');
});



var btn5 = document.querySelector('#green3');
var btn6 = document.querySelector('#red3');

btn5.addEventListener('click', function () {

    if (btn6.classList.contains('red')) {
        btn6.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn6.addEventListener('click', function () {

    if (btn5.classList.contains('green')) {
        btn5.classList.remove('green');

    }
    this.classList.toggle('red');
});





var btn7 = document.querySelector('#green4');
var btn8 = document.querySelector('#red4');

btn7.addEventListener('click', function () {

    if (btn8.classList.contains('red')) {
        btn8.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn8.addEventListener('click', function () {

    if (btn7.classList.contains('green')) {
        btn7.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn9 = document.querySelector('#green5');
var btn10 = document.querySelector('#red5');

btn9.addEventListener('click', function () {

    if (btn10.classList.contains('red')) {
        btn10.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn10.addEventListener('click', function () {

    if (btn9.classList.contains('green')) {
        btn9.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn11 = document.querySelector('#green6');
var btn12 = document.querySelector('#red6');

btn11.addEventListener('click', function () {

    if (btn12.classList.contains('red')) {
        btn12.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn12.addEventListener('click', function () {

    if (btn11.classList.contains('green')) {
        btn11.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn13 = document.querySelector('#green7');
var btn14 = document.querySelector('#red7');

btn13.addEventListener('click', function () {

    if (btn14.classList.contains('red')) {
        btn14.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn14.addEventListener('click', function () {

    if (btn13.classList.contains('green')) {
        btn13.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn15 = document.querySelector('#green8');
var btn16 = document.querySelector('#red8');

btn15.addEventListener('click', function () {

    if (btn16.classList.contains('red')) {
        btn16.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn16.addEventListener('click', function () {

    if (btn15.classList.contains('green')) {
        btn15.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn17 = document.querySelector('#green9');
var btn18 = document.querySelector('#red9');

btn17.addEventListener('click', function () {

    if (btn18.classList.contains('red')) {
        btn18.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn18.addEventListener('click', function () {

    if (btn17.classList.contains('green')) {
        btn17.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn19 = document.querySelector('#green10');
var btn20 = document.querySelector('#red10');

btn19.addEventListener('click', function () {

    if (btn20.classList.contains('red')) {
        btn20.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn20.addEventListener('click', function () {

    if (btn19.classList.contains('green')) {
        btn19.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn21 = document.querySelector('#green11');
var btn22 = document.querySelector('#red11');

btn21.addEventListener('click', function () {

    if (btn22.classList.contains('red')) {
        btn22.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn22.addEventListener('click', function () {

    if (btn21.classList.contains('green')) {
        btn21.classList.remove('green');

    }
    this.classList.toggle('red');
});






var btn23 = document.querySelector('#green12');
var btn24 = document.querySelector('#red12');

btn23.addEventListener('click', function () {

    if (btn24.classList.contains('red')) {
        btn24.classList.remove('red');

    }
    this.classList.toggle('green');




});

btn24.addEventListener('click', function () {

    if (btn23.classList.contains('green')) {
        btn23.classList.remove('green');

    }
    this.classList.toggle('red');
});



// Inside your insidepage1.js

document.addEventListener("DOMContentLoaded", function () {
    // Example API URL (replace with your actual API endpoint)
    const apiUrl = "https://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json";

    // Function to fetch game details
    function fetchGameDetails() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);

                }
                return response.json();
            })
            .then(data => {
                updateGameCards(data);
            })
            .catch(error => {
                console.error("Error fetching game details:", error);
            });
    }

    // Function to update the game cards with the API data
    function updateGameCards(games) {
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.innerHTML = ""; // Clear any existing content

        games.forEach((game, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.id = card-$;{index + 1};

            card.innerHTML = `
                <img src="${game.image}" alt="${game.title}" class="responsive-image" />
                <div class="card-info">
                    <h2>${game.title}</h2>
                    <p>${game.description}</p>
                    <div class="stats">
                        <span>👥 ${game.players}</span>
                        <span>👁 ${game.views}</span>
                        <span>📅 ${game.frequency}</span>
                    </div>
                    <div class="buttons">
                        <button>Review</button>
                        <button>More information</button>
                    </div>
                </div>
            `;

            gridContainer.appendChild(card);
        });
    }

    // Call the function to fetch game details on page load
    fetchGameDetails();
});




