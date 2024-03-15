const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', formSubmitHandler); // слухач submit
form.addEventListener('input', formInputHandler); // слухач input

// збереження данних у LocalStorage
function saveDataFormToLocalStorage() {
  const message = textarea.value.trim(); // значення тексту поля Message
  const email = emailInput.value.trim(); // значення поля Email
  const data = JSON.stringify({ message, email }); // перетворення значень JavaScript у рядок JSON
  localStorage.setItem(STORAGE_KEY, data); // збереження перетворенного у JSON рядок у Local Storage
}
// завантаження даних з LocalStorage
function loadDataFormFromLocalStorage() {
  const jsn = localStorage.getItem(STORAGE_KEY); // отримання значення ключа STORAGE_KEY з Local Storage
  try {
    const data = JSON.parse(jsn); // перетворення значення ключа STORAGE_KEY з JSON знову у JavaScript
    if (data) {
      textarea.value = data.message;
      emailInput.value = data.email;
    }
  } catch (error) {
    console.error('Error parsing JSON:', error.message);
  }
}

function formInputHandler() {
  saveDataFormToLocalStorage();
}

function formSubmitHandler(event) {
  event.preventDefault();
  const message = textarea.value.trim(); // значення тексту поля Message
  const email = emailInput.value.trim(); // значення поля Email
  if (!message || !email) {
    alert('Please fill in all fields.');
    return;
  }
  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY); // очищення даних з локального сховища після відправки форми
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ message, email })); // збереження перетворенного у JSON рядок у Local Storage
  form.reset(); // очищення форми
}

loadDataFormFromLocalStorage(); // Завантаження даних з локального сховища при завантаженні сторінки
