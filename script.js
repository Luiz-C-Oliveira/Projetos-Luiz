// Select button
var button = document.getElementById('read_button');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = 'Ler Menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ler Mais';
});

// Select button
var button = document.getElementById('read_button1');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card1');

    // Add/Remove Class Active
    card.classList.toggle('active1');

    if (card.classList.contains('active1')) {
        // Change button text if has class active
        return button.textContent = 'Ler Menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ler Mais';
});

// Select button
var button = document.getElementById('read_button2');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card2');

    // Add/Remove Class Active
    card.classList.toggle('active2');

    if (card.classList.contains('active2')) {
        // Change button text if has class active
        return button.textContent = 'Ler Menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ler Mais';
});

// Select button
var button = document.getElementById('read_button3');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card3');

    // Add/Remove Class Active
    card.classList.toggle('active3');

    if (card.classList.contains('active3')) {
        // Change button text if has class active
        return button.textContent = 'Ler Menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ler Mais';
});

// Select button
var button = document.getElementById('read_button4');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card4');

    // Add/Remove Class Active
    card.classList.toggle('active4');

    if (card.classList.contains('active4')) {
        // Change button text if has class active
        return button.textContent = 'Ler Menos';
    }
    
    // Change button text if hasn't class active
    button.textContent = 'Ler Mais';
});

var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});

