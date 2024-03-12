const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', formSubmitHandler); // слухач submit

function formSubmitHandler(event) {
  event.preventDefault();
  const message = textarea.value.trim(); // значення тексту поля Message
  const email = form.elements.email.value.trim(); // значення поля Email
  const data = JSON.stringify({ message, email }); // перетворення значень JavaScript у рядок JSON
  localStorage.setItem(STORAGE_KEY, data); // збереження перетворенного у JSON рядок у Local Storage
  console.log(email, data);
  form.reset();
}

const jsn = localStorage.getItem(STORAGE_KEY) ?? ''; // отримання значення ключа STORAGE_KEY з Local Storage
try {
  const data = JSON.parse(jsn); // перетворення значення ключа STORAGE_KEY з JSON знову у JavaScript
  console.log(data);
  textarea.value = data.message; // у значення тексту поля Message зберігаю значення ключа message об'єкта data
  form.elements.email.value = data.email; // у значення тексту поля Email зберігаю значення ключа email об'єкта data
} catch {
  console.log('No saved data!');
}
