import { yesCards, noCards, yesAnswers, noAnswers } from '../text/yesNoDescriptions.js';
import { cardPaths } from '../text/cardPaths.js'

window.addEventListener('DOMContentLoaded', init);

function init(){
    var selectedCard = null;
    var bottomCardContainer = null;
    var isCardSelected = false; // Flag to track card selection

    /* Check when card is clicked */
    document.getElementById('deck').addEventListener('click', function(event) {
        if (!isCardSelected && event.target.classList.contains('card')) {
            // Hide the card
            event.target.style.visibility = 'hidden';
            selectedCard = new Image(100, 200);

            isCardSelected = true;

            // Create the overall container for the card
            var container = document.createElement('div');
            container.classList.add('overlay');

            // Create the pick another card button
            var button = document.createElement('button');
            button.classList.add('choose_another')
            button.textContent = 'Choose a Different Card';

            // Create the flexContainer which will have the card and all the text
            var flexContainer = document.createElement('div');
            flexContainer.style.display = 'flex';

            // Create a container for the image and style it 
            var imageContainer = document.createElement('div');
            imageContainer.style.padding = '10px';
            imageContainer.style.height = '500px';
            imageContainer.style.width = '200px';
            imageContainer.style.display = 'flex';
            imageContainer.style.flexDirection = 'column'; // Arrange elements vertically
            imageContainer.style.justifyContent = 'center';

            // Choose which card it will be randomly
            var image = new Image(200, 300);
            const cardIdx = Math.floor(Math.random() * cardPaths.length);
            image.src = cardPaths[cardIdx];
            selectedCard.src = cardPaths[cardIdx];

            // Choose if it will be a positive or negative reading
            var title = document.createElement('h1');
            var randomTitle = Math.random() < 0.5 ? 'Yes' : 'No';
            title.textContent = randomTitle;

            // Create and fill out description
            var text = document.createElement('p');
            if (randomTitle == 'Yes'){
                text.textContent = yesAnswers[cardIdx]
            }
            else {
                text.textContent = noAnswers[cardIdx]
            }

            // When the button is clicked, it will place the card image on the bototm of the screen, reset the containers, and place the card back in the deck
            button.addEventListener('click', function() {
                if (selectedCard && bottomCardContainer) {
                    bottomCardContainer.innerHTML = ''; 
                    bottomCardContainer.appendChild(selectedCard);
                    selectedCard.style.visibility = 'visible';
                }
                event.target.style.visibility = 'visible';
                document.body.removeChild(container);
                isCardSelected = false;
            });
            image.style.maxWidth = '100%';
            imageContainer.appendChild(image);

            // Create a container for the text on the right side
            var infoContainer = document.createElement('div');
            infoContainer.style.padding = '10px';
            infoContainer.style.display = 'flex';
            infoContainer.style.flexDirection = 'column'; // Arrange elements vertically
            infoContainer.style.justifyContent = 'center'; // Center elements vertically
            infoContainer.style.overflow = 'auto'; // Add overflow handling
            infoContainer.style.height = '500px';
            infoContainer.style.width = '200px';

            // Append all information
            container.appendChild(flexContainer);
            flexContainer.appendChild(imageContainer);
            flexContainer.appendChild(infoContainer);
            infoContainer.appendChild(title);
            infoContainer.appendChild(text);
            infoContainer.appendChild(button);

            document.body.appendChild(container);

            // Adjust container height
            container.style.position = 'fixed';
            container.style.top = '50%';
            container.style.left = '50%';

            // Create or update the bottom card container
            if (!bottomCardContainer) {
                bottomCardContainer = document.createElement('div');
                bottomCardContainer.style.position = 'fixed';
                bottomCardContainer.style.bottom = '10px';
                bottomCardContainer.style.left = '50%';
                bottomCardContainer.style.transform = 'translateX(-50%)';
                document.body.appendChild(bottomCardContainer);
            }
        }
      });
};

var question = document.getElementById('question');
var submitButton = document.getElementById('submitButton');
var questionText = document.getElementById('question-text');
var instructions = document.getElementById('instructions');
var deck = document.getElementById('deck');
var textEnabled = true

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (textEnabled){
        var input = document.getElementById('question').value; 
        if (input.trim() === '') {
            return;
        }
        questionText.textContent = input; // Update h1 tag's content
        question.style.display = 'none'; 
        submitButton.textContent = 'Update Question';
        instructions.classList.add('fade-in')
        deck.classList.add('fade-in')
        instructions.style.visibility = 'visible'
        deck.style.visibility = 'visible'
        textEnabled = false;
    }
    else {
        question.style.display = 'flex'; 
        document.getElementById('question').value = ''; 
        questionText.textContent = 'What question do you want answered?'; // Reset the h1 tag's content
        submitButton.textContent = 'Submit';
        textEnabled = true;

function findZodiacSign() {
    console.log("This works!");
    var monthInput = document.getElementById('birth-month').value.toLowerCase();
    var dateInput = parseInt(document.getElementById('birth-date').value);

    var zodiacSign = '';

    if ((monthInput === 'december' && dateInput >= 22) || (monthInput === 'january' && dateInput <= 19)) {
        zodiacSign = 'Capricorn';
    } else if ((monthInput === 'january' && dateInput >= 20) || (monthInput === 'february' && dateInput <= 18)) {
        zodiacSign = 'Aquarius';
    } else if ((monthInput === 'february' && dateInput >= 19) || (monthInput === 'march' && dateInput <= 20)) {
        zodiacSign = 'Pisces';
    } else if ((monthInput === 'march' && dateInput >= 21) || (monthInput === 'april' && dateInput <= 19)) {
        zodiacSign = 'Aries';
    } else if ((monthInput === 'april' && dateInput >= 20) || (monthInput === 'may' && dateInput <= 20)) {
        zodiacSign = 'Taurus';
    } else if ((monthInput === 'may' && dateInput >= 21) || (monthInput === 'june' && dateInput <= 20)) {
        zodiacSign = 'Gemini';
    } else if ((monthInput === 'june' && dateInput >= 21) || (monthInput === 'july' && dateInput <= 22)) {
        zodiacSign = 'Cancer';
    } else if ((monthInput === 'july' && dateInput >= 23) || (monthInput === 'august' && dateInput <= 22)) {
        zodiacSign = 'Leo';
    } else if ((monthInput === 'august' && dateInput >= 23) || (monthInput === 'september' && dateInput <= 22)) {
        zodiacSign = 'Virgo';
    } else if ((monthInput === 'september' && dateInput >= 23) || (monthInput === 'october' && dateInput <= 22)) {
        zodiacSign = 'Libra';
    } else if ((monthInput === 'october' && dateInput >= 23) || (monthInput === 'november' && dateInput <= 21)) {
        zodiacSign = 'Scorpio';
    } else if ((monthInput === 'november' && dateInput >= 22) || (monthInput === 'december' && dateInput <= 21)) {
        zodiacSign = 'Sagittarius';
    } else {
        zodiacSign = 'Invalid date or month';
    }
 });
