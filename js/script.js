window.addEventListener('DOMContentLoaded', function() {

    const calculator = require('./modules/calculator'),
          forms = require('./modules/forms'),
          menuCards = require('./modules/menu_cards'),
          modal = require('./modules/modal'),
          slider = require('./modules/slider'),
          tabs = require('./modules/tabs'),
          timer = require('./modules/timer');
    
    calculator();
    forms();
    menuCards();
    modal();
    slider();
    tabs();
    timer();
});
