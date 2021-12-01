

document.addEventListener('DOMContentLoaded', () => {
    // version 1 (not optimal)
    // let img1 = document.querySelector('.tabcontainer .tabcontent:first-child'),
    //     img2 = document.querySelector('.tabcontainer .tabcontent:nth-child(2)'),
    //     img3 = document.querySelector('.tabcontainer .tabcontent:nth-child(3)'),
    //     img4 = document.querySelector('.tabcontainer .tabcontent:nth-child(4)'),
    //     btn1 = document.querySelector('.tabheader__items .tabheader__item:first-child'),
    //     btn2 = document.querySelector('.tabheader__items .tabheader__item:nth-child(2)'),
    //     btn3 = document.querySelector('.tabheader__items .tabheader__item:nth-child(3)'),
    //     btn4 = document.querySelector('.tabheader__items .tabheader__item:nth-child(4)');

    // function hideAll () {
    //     img1.style.display='none';
    //     img2.style.display='none';
    //     img3.style.display='none';
    //     img4.style.display='none';
    // }
    // hideAll();

    // img1.style.display='block';

    // function tabs () {
    //         btn1.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         hideAll();
    //         img1.style.display='block';
    //         btn1.classList.add('tabheader__item_active');
    //         btn2.classList.remove('tabheader__item_active');
    //         btn3.classList.remove('tabheader__item_active');
    //         btn4.classList.remove('tabheader__item_active');
    //     });
    //     btn2.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         hideAll();
    //         img2.style.display='block';
    //         btn2.classList.add('tabheader__item_active');
    //         btn1.classList.remove('tabheader__item_active');
    //         btn3.classList.remove('tabheader__item_active');
    //         btn4.classList.remove('tabheader__item_active');
    //     });
    //     btn3.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         hideAll();
    //         img3.style.display='block';
    //         btn3.classList.add('tabheader__item_active');
    //         btn1.classList.remove('tabheader__item_active');
    //         btn2.classList.remove('tabheader__item_active');
    //         btn4.classList.remove('tabheader__item_active');
    //     });
    //     btn4.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         hideAll();
    //         img4.style.display='block';
    //         btn4.classList.add('tabheader__item_active');
    //         btn1.classList.remove('tabheader__item_active');
    //         btn3.classList.remove('tabheader__item_active');
    //         btn2.classList.remove('tabheader__item_active');
    //     });
    // }
    // tabs();


    // version2 (optimal)
    // let tabs = document.querySelectorAll('.tabheader__item'),
    //     tabsContent = document.querySelectorAll('.tabcontent'),
    //     tabsParent = document.querySelector('.tabheader__items');

    // function hideTabContent () {
    //     tabsContent.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });
    //     tabs.forEach(item => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }

    // function showTabContent (i = 0) { //* i по умолчанию будет равняться 0 *//
    //     tabsContent[i].classList.add('show', 'fade');
    //     tabs[i].classList.add('tabheader__item_active');
    // }

    // hideTabContent();
    // showTabContent();

    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabs.forEach((item, i) => {
    //             if (target == item) {
    //                 hideTabContent();
    //                 showTabContent(i);
    //             }
    //         });
    //     }
    // });



    let tabsContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsWrapper = document.querySelector('.tabheader__items');



    function hideTabs() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabs(i = 0) {
        hideTabs();
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    tabsWrapper.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item == event.target) {
                    showTabs(i);
                }
            });
        }
    });
    hideTabs();
    showTabs();

    //timer

    // let deadline = '2021-12-12';

    // function getTimeRemaining (endtime) {
    //     const t = Date.parse(endtime) - Date.parse(new Date()),
    //         days = Math.floor( (t / (1000 * 60 * 60 * 24)) ),
    //         hours = Math.floor( (t / (1000 * 60 * 60) % 24) ),
    //         minutes = Math.floor(  (t / 1000 / 60) % 60 ),
    //         seconds = Math.floor( (t / 1000) % 60);

    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours, 
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }

    // function setClock (selector, endtime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);

    //     updateClock();

    //     function updateClock () {
    //         const t = getTimeRemaining(endtime);
    //         days.innerHTML = t.days;
    //         hours.innerHTML = t.hours;
    //         minutes.innerHTML = t.minutes;
    //         seconds.innerHTML = t.seconds;

    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    // setClock('.timer', deadline);


    let endtime = '2022-02-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor(t / 1000 % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function addZero(num) {
        if (num > 0 && num < 10) {
            return `0` + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

        }
    }
    setClock('.timer', endtime);

    //modal


    let modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        body = document.getElementsByTagName('body');

    function hideModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    function showModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        modal.classList.add('fade');
        clearInterval(openModal5sec); /*чтобы openModal5sec не открывал модалку если юзер сам её открыл*/
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', showModal);
    });



    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            hideModal();
        }
    });


    document.addEventListener('keydown', (event) => {
        if (event.code == 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });

    //открытие модального окна спустя время

    function openModal5sec() {
        setTimeout(showModal, 5000);
    }
    // openModal5sec();
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    // function showModalByScroll () {
    //     if (document.documentElement.scrollTop >= 300) {
    //         showModal();
    //         window.removeEventListener('scroll', showModalByScroll);
    //     }
    // }
    window.addEventListener('scroll', showModalByScroll);


    // шаблонизация меню при помощи классов, REST оператор

    class MenuItem {
        constructor(src, alt, subtitle, descr, cost, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.cost = cost;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.convertToUAH();
        }

        convertToUAH() {
            this.cost = this.cost * this.transfer;
        }

        render() {
            let div = document.createElement('div');
            //если кто-то забудет вписать класс в MenuItem, по умолчанию добавится .menu__item
            if (this.classes.length == 0) { 
                div.classList.add('menu__item');
            } else {
                this.classes.forEach(className => div.classList.add(className));
            }

            
            div.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                    </div>`;
            this.parent.append(div);

        }
    }



    new MenuItem(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '9',
        ".menu .container",
        'menu__item'
    ).render();
    new MenuItem(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '14',
        ".menu .container",
        'menu__item'
    ).render();
    new MenuItem(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '21',
        ".menu .container",
        'menu__item'
    ).render();

    // передача данных на сервер 

    const forms = document.querySelectorAll('form');

    const formMessage = {
        loading: 'img/form/spinner.svg',
        success: 'данные успешно отправлены',
        failure: 'произошла ошибка'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const message = document.createElement('img');
            message.src = formMessage.loading;
            message.style.cssText=`
                display:block;
                margin:0 auto;
                width:50px;
                height:50px;
            `;
            
            form.insertAdjacentElement('afterend', message);

            const formData = new FormData(form);

            const obj = {};

            formData.forEach((value, key) => {
                obj[key] = value;
            });

            fetch('server.php', {
                method:'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then ( data => data.text())
            .then( (data) => {
                console.log(data);
                showThanksModal(formMessage.success);
            })
            .catch( ()=> {
                showThanksModal(formMessage.failure);
            })
            .finally( () => {
                form.reset();
                setTimeout(() => {
                    message.remove();
                }, 2000);
            });

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            // // const json = JSON.stringify(obj);
            // request.send(json);

            // new XMLHttpRequest().addEventListener('load', () => {
            //     if (new XMLHttpRequest() === 200) {
            //         console.log(new XMLHttpRequest().response);
            //         showThanksModal(formMessage.success);
            //         message.remove();
            //         form.reset();
            //         setTimeout(() => {
            //             message.remove();
            //         }, 2000);
            //     } else {
            //         showThanksModal(formMessage.failure);
            //     }
            // });
        });
    }

    function showThanksModal (formMessage) {
        let oldModal = document.querySelector('.modal__dialog');

        oldModal.classList.add('hide');
        // oldModal.classList.remove('show');
        showModal();

        

        let thanksModal = document.createElement('div');

        thanksModal.classList.add('.modal');
        thanksModal.innerHTML=`
        <div class="modal__dialog">
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${formMessage}</div>
            </div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);

        setTimeout( () => {
            thanksModal.remove();
            oldModal.classList.add('show');
            oldModal.classList.remove('hide');
            hideModal();
        }, 4000);
    }
    
});