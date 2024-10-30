const addressInputs = document.querySelectorAll('.group__input');

// Устанавливаем значение placeholder в value, если поле пустое
addressInputs.forEach(input => {
  if (!input.value) {
    input.value = input.placeholder;
  }
});

// Убираем значение placeholder при фокусе и восстанавливаем, если значение пустое после потери фокуса
addressInputs.forEach(input => {
  input.addEventListener('focus', () => {
    if (input.value === input.placeholder) {
      input.value = '';
    }
  });

  input.addEventListener('blur', () => {
    if (!input.value) {
      input.value = input.placeholder;
    }
  });
});
