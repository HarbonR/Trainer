//==================================================
// Создаём переменные для блока кода
let header__loginRegistration = document.getElementById('header__loginRegistration'); // Создаём переменную на ссылку вход / регистрация
let formRegister = document.getElementById('formRegister'); // Создаём переменную на div форма регистрации
let formEnter = document.getElementById('formEnter'); // Создаём переменную на div форма входа
//--------------------------------------------------
// Функция для кнопки вход / регистрация
if(header__loginRegistration) // Проверка пуста ли переменная
{
    header__loginRegistration.onclick = function()
    {
        document.getElementById("modal-window").style.display = "flex";
        formEnter.style.display = "flex"; // Делаем видимым форму входа
        document.getElementById("header").style.top = "-1000px"; // Скрываем бургер
    }
}
//--------------------------------------------------
// Добавляем слушателя на документ
document.addEventListener('click', function(event)
{
    if (!formEnter.contains(event.target) && event.target !== header__loginRegistration 
    && !formRegister.contains(event.target) && event.target !== header__loginRegistration) // Проверяем если нажимаем куда-то не на форму регистрации и входа
    {
        document.getElementById("modal-window").style.display = "none";
        formEnter.style.display = "none"; // Делаем не видимой форму входа
        formRegister.style.display = "none"; // Делаем не видимой форму регистрации
    }
});
//--------------------------------------------------
let createAccount = document.getElementById('createAccount'); // Создаём переменную на ссылку создать аккаунт
//--------------------------------------------------
// Функция для создания аккаунта 
createAccount.onclick = function()
{
    formEnter.style.display = 'none'; // Делаем не видимой форму входа
    formRegister.style.display = "flex"; // Делаем видимым форму регистрации
}
//==================================================
// Функция для проверки валидации формы регистрации
function validateFormForRegister()
{
    var nameRegister = document.getElementById("nameRegister");
    var emailRegister = document.getElementById("emailRegister");
    var passwordRegister = document.getElementById("passwordRegister");
    var isValid = true;
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage)
    {
        errorMessage.remove();
    });
    nameRegister.style.borderColor = "";
    emailRegister.style.borderColor = "";
    passwordRegister.style.borderColor = "";

    if (nameRegister.value === "")
    {
        nameRegister.style.borderColor = "red";
        nameRegister.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
        isValid = false;
    }

    if (emailRegister.value === "")
    {
        emailRegister.style.borderColor = "red";
        emailRegister.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
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
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");
    var isValid = true;
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage)
    {
        errorMessage.remove();
    });
    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    if (emailInput.value === "")
    {
        emailInput.style.borderColor = "red";
        emailInput.insertAdjacentHTML("afterend", "<p class='error-message' style='margin: 0'>Поле не заполнено</p>");
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
// Функция для отправки данных о пользователе
let xhrData = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest
xhrData.onreadystatechange = function() // Устанавливаем функцию, которая будет вызываться при изменении состояния объекта `xhr`
{
    if (xhrData.readyState === 4 && xhrData.status === 200) // Проверяем, что запрос завершен и успешен
    {
        if (xhrData.responseText)
        {
            let userData = JSON.parse(xhrData.responseText);
            user.removeAttribute("style");
            user.textContent = userData[0];
            header__loginRegistration.style.display = "none";
        }
    }
};
xhrData.open("POST", "PHP/registrationDate.php"); // Открываем соединение с сервером с помощью метода "POST" и адреса "cards.php"
xhrData.send(); // Отправляем запрос на сервер
//==================================================
// Функция для обработки кнопки выход
let exit = document.getElementById("exit");
exit.onclick = function()
{
    header__loginRegistration.removeAttribute("style");
    user.style.display = "none";
    user__data.style.display = "none";
    header__cards.click();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'PHP/exit.php', false); // Установлен параметр async в false
    xhr.send();
}
//==================================================