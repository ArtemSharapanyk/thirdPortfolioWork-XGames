import './assets/css/main.css';
import './assets/css/normalize.css';
import './assets/css/media/mainMedia.css';

import './assets/css/header.css';
import './assets/css/media/headerMedia.css';

import './assets/css/services.css';
import './assets/css/media/servicesMedia.css';

import './assets/css/blog.css';
import './assets/css/media/blogMedia.css'

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