import './assets/css/main.css';
import './assets/css/normalize.css';
import './assets/css/media/mainMedia.css';

import './assets/css/header.css';
import './assets/css/media/headerMedia.css';

document.addEventListener('DOMContentLoaded', () => {
    let link = document.querySelectorAll('a');
    let menu = require('./js/menu');

    link.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    menu('.menu', '.toggleBtn', 'activeMenu')
});