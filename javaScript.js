let loginRegistration = document.getElementById('header__loginRegistration'); // Создаём переменную на ссылку вход / регистрация
let formEnter = document.getElementById('formEnter'); // Создаём переменную на div форма входа
let formRegister = document.getElementById('formRegister'); // Создаём переменную на div форма регистрации
let header = document.getElementById('header__search'); // Создаём переменную на div поиск по сайту
let createAccount = document.getElementById('createAccount'); // Создаём переменную на ссылку создать аккаунт
//==================================================
// Функция для кнопки вход / регистрация
loginRegistration.onclick = function()
{
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Меняем цвет заднего фона окна на серый
    formEnter.style.display = "flex"; // Делаем видимым форму входа
}
//==================================================
// Функция для создания аккаунта 
createAccount.onclick = function()
{
    formEnter.style.display = 'none'; // Делаем не видимой форму входа
    formRegister.style.display = "flex"; // Делаем видимым форму регистрации
}
//==================================================
// Добавляем слушателя на документ
document.addEventListener('click', function(event)
{
    if (!formEnter.contains(event.target) && event.target !== loginRegistration 
    && !formRegister.contains(event.target) && event.target !== loginRegistration) // Проверяем если нажимаем куда-то не на форму регистрации и входа
    {
        document.body.style.backgroundColor = ""; // Меняем цвет заднего фона окна на стандарный
        formEnter.style.display = "none"; // Делаем не видимой форму входа
        formRegister.style.display = "none"; // Делаем не видимой форму ругистрации
    }
});
//==================================================
// Функция для проверки валидации формы регистрации
function validateFormForRegister()
{
    var nameRegister = document.getElementById("nameRegister");
    var emaiRegister = document.getElementById("emailRegister");
    var passwordRegister = document.getElementById("passwordRegister");
    var isValid = true;
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage)
    {
        errorMessage.remove();
    });
    nameRegister.style.borderColor = "";
    emaiRegister.style.borderColor = "";
    passwordRegister.style.borderColor = "";

    if (nameRegister.value === "")
    {
        nameRegister.style.borderColor = "red";
        nameRegister.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
        isValid = false;
    }

    if (emaiRegister.value === "")
    {
        emaiRegister.style.borderColor = "red";
        emaiRegister.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
        isValid = false;
    }

    if (passwordRegister.value === "")
    {
        passwordRegister.style.borderColor = "red";
        passwordRegister.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
        isValid = false;
    }
    return isValid;
}
//==================================================
// Функция для проверки валидации формы входа
function validateFormForEnter()
{
    var emaiInput = document.getElementById("emaiInput");
    var passwordInput = document.getElementById("passwordInput");
    var isValid = true;
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage)
    {
        errorMessage.remove();
    });
    emaiInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    if (emaiInput.value === "")
    {
        emaiInput.style.borderColor = "red";
        emaiInput.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
        isValid = false;
    }

    if (passwordInput.value === "")
    {
        passwordInput.style.borderColor = "red";
        passwordInput.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
        isValid = false;
    }
    return isValid;
}
//==================================================
//
let cards = document.getElementById("Cards"); // Получаем элемент с ID "Cards"
let xhr = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest

xhr.onreadystatechange = function() // Устанавливаем функцию, которая будет вызываться при изменении состояния объекта `xhr`
{
    if (xhr.readyState === 4 && xhr.status === 200) // Проверяем, что запрос завершен и успешен
    {
        cards.innerHTML = xhr.responseText; // Заменяем содержимое элемента "cont" ответом сервера
    }
};

xhr.open("POST", "cards.php"); // Открываем соединение с сервером с помощью метода "GET" и адреса "cards.php"
xhr.send(); // Отправляем запрос на сервер
//==================================================