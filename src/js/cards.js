import menuCard from '../template/menu-card.hbs'
console.log(menuCard(1));
import menu from '../menu.json'
console.log(menu);

export const menuList = document.querySelector('.js-menu');
export const cardMenu = menu.reduce((acc, card) => {
    return acc + menuCard(card)
}, '');
//console.log(cardMenu);
menuList.innerHTML = cardMenu;