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
    forms('form', modalTimerId);
    menuCards();
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        slidesSelector: '.offer__slide',
        sliderSelector: '.offer__slider',
        arrowPrev: '.offer__slider-prev',
        arrowNext: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        sliderWrapper: '.offer__slider-wrapper',
        slidesFieldSelector: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-05-11');
});
