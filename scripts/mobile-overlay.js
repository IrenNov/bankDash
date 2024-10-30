const menuButton = document.getElementById('btn_mobile-overlay');
const menu = document.getElementById('mobile-overlay');


menuButton.addEventListener('click', () => {
    // Проверка текущего состояния
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    // Переключение атрибутов и класса
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('mobile-overlay', !isExpanded);
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target) || menuButton.contains(event.target);

    // Если клик не внутри меню или кнопки, и меню открыто, закрываем меню
    if (!isClickInsideMenu && menu.classList.contains('mobile-overlay')) {
        menu.classList.remove('mobile-overlay');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});