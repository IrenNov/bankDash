

const navLinks = document.querySelectorAll('.aside__link');
const sections = document.querySelectorAll('.card__container');

// Функция для деактивации всех ссылок и активации выбранной
function setActiveLinkOnClick(event) {
  event.preventDefault(); // Отменяем стандартное поведение перехода по якорю

  navLinks.forEach(link => {
    link.classList.remove('aside__link--active'); // Убираем активный класс у всех ссылок
  });

  event.currentTarget.classList.add('aside__link--active'); // Добавляем активный класс для текущей ссылки

  const targetId = event.currentTarget.getAttribute('href').substring(1); // Получаем ID секции
  const targetSection = document.getElementById(targetId); // Находим секцию по ID

  // Скрываем все секции и показываем только целевую
  sections.forEach(section => {
    section.style.display = 'none';
  });

  targetSection.style.display = 'block'; // Показываем целевую секцию
}

// Навешиваем обработчик клика на все ссылки
navLinks.forEach(link => {
  link.addEventListener('click', setActiveLinkOnClick);
});

// Изначально скрываем все секции, кроме первой (или активной)
sections.forEach((section, index) => {
  if (index !== 0) {
    section.style.display = 'none';
  }
});