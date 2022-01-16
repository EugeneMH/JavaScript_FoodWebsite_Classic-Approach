    import calculator from './modules/calculator';
    import forms from './modules/forms';
    import menuCards from './modules/menu_cards';
    import modal from './modules/modal';
    import slider from './modules/slider';
    import tabs from './modules/tabs';
    import timer from './modules/timer';
    import {openModal} from './modules/modal';

    window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout( () => openModal('.modal', modalTimerId), 30000);
    
    calculator();
    forms('form');
    menuCards();
    modal('[data-modal]', '.modal', modalTimerId);
    slider();
    tabs();
    timer();
});
