

const cardLinks = document.querySelectorAll('.setting-card__link');
const form = document.querySelectorAll('.setting-card__form');

// Функция для деактивации всех ссылок и активации выбранной
function setActiveLinkOnClick(event) {
  event.preventDefault(); // Отменяем стандартное поведение перехода по якорю

  cardLinks.forEach(link => {
    link.classList.remove('setting-card__link--active'); // Убираем активный класс у всех ссылок
  });

  event.currentTarget.classList.add('setting-card__link--active'); // Добавляем активный класс для текущей ссылки

  const targetId = event.currentTarget.getAttribute('href').substring(1); // Получаем ID секции
  const targetSection = document.getElementById(targetId); // Находим секцию по ID

  // Скрываем все секции и показываем только целевую
  form.forEach(section => {
    section.style.display = 'none';
  });

  targetSection.style.display = 'flex'; // Показываем целевую секцию
}

// Навешиваем обработчик клика на все ссылки
cardLinks.forEach(link => {
  link.addEventListener('click', setActiveLinkOnClick);
});

// Изначально скрываем все секции, кроме первой (или активной)
form.forEach((section, index) => {
  if (index !== 0) {
    section.style.display = 'none';
  }
});