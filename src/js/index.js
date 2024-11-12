// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Slick slider
import slickSlider from './modules/slick-slider.js';
slickSlider();

// Json файлы 
import dataJson from './modules/data-json.js';
dataJson();

// PortfolioCards 
import PortfolioCards from './modules/cards.js';
PortfolioCards();