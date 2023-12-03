//==================================================
// Функционал для переключения вкладок
let header = document.getElementById("header");
let tabs = header.getElementsByClassName("enteredTab");
let header__cards = document.getElementById("header__cards");
let header__trains = document.getElementById("header__trains");
let user = document.getElementById("user");
let user__data = document.getElementById("user__data");
//--------------------------------------------------
window.addEventListener('load', function()
{
    header__cards.click();
});
//--------------------------------------------------
header__cards.onclick = function() // Выбираем вкладку карточки
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    user__data.style.display = "none";
    header__cards.classList.add("enteredTab");
    getCards("cards.php");
};
//--------------------------------------------------
header__trains.onclick = function() // Выбираем вкладку тренировка
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    user__data.style.display = "none";
    header__trains.className = "enteredTab";
}
//--------------------------------------------------
user.onclick = function() // Выбираем вкладку пользователь
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    user__data.removeAttribute("style");
    user.className = "enteredTab";
    getCards("userCards.php");
}
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
    xhr.open('GET', 'exit.php', false); // Установлен параметр async в false
    xhr.send();
}
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
    }
}
//--------------------------------------------------
let createAccount = document.getElementById('createAccount'); // Создаём переменную на ссылку создать аккаунт
//--------------------------------------------------
// Функция для создания аккаунта 
createAccount.onclick = function()
{
    formEnter.style.display = 'none'; // Делаем не видимой форму входа
    formRegister.style.display = "flex"; // Делаем видимым форму регистрации
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
// Создаем функцию для создания карточки
function createCard(id, linkToPicture, wordsInTheTargetLanguage, wordsInNativeLanguage)
{
    // Создаем элементы для карточки
    let card = document.createElement("div");
    card.className = "cards";
    card.id = "card: " + id;
  
    let picture = document.createElement("div");
    picture.className = "picture";
    let img = document.createElement("img");
    img.src = linkToPicture;
    img.alt = wordsInTheTargetLanguage;
    picture.appendChild(img);
  
    let buttons = document.createElement("div");
    buttons.className = "buttons";
    let buttonAdd = document.createElement("div");
    buttonAdd.className = "button-add";
    buttonAdd.onclick = function()
    {
        var xhr = new XMLHttpRequest(); // Создаем новый объект XMLHTTPrequest
        xhr.open("POST", "addCard.php", true); 
        // Отправляем запрос на сервер
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // Устанавливаем заголовок Content-Type
        xhr.send("data=" + encodeURIComponent(id));
    }
    let imgAdd = document.createElement("img");
    imgAdd.src = "Pictures/button-add.svg";
    imgAdd.alt = "add";
    buttonAdd.appendChild(imgAdd);
    let buttonSound = document.createElement("div");
    buttonSound.className = "button-sound";
    let imgSound = document.createElement("img");
    imgSound.src = "Pictures/button-sound.svg";
    imgSound.alt = "sound";
    buttonSound.appendChild(imgSound);
    buttons.appendChild(buttonAdd);
    buttons.appendChild(buttonSound);
  
    let word = document.createElement("div");
    word.className = "word";
    word.textContent = wordsInTheTargetLanguage;
  
    let translate = document.createElement("div");
    translate.className = "translate";
    translate.textContent = wordsInNativeLanguage;
  
    // Добавляем элементы карточки внутрь основного элемента
    card.appendChild(picture);
    card.appendChild(buttons);
    card.appendChild(word);
    card.appendChild(translate);
  
    // Возвращаем созданную карточку
    return card;
  }
//--------------------------------------------------
function getCards(path)
{
    // Получение данных о карточках
    let cardsContainer = document.getElementById("Cards"); // Получаем элемент с ID "Cards"
    let xhrCards = new XMLHttpRequest(); // Создаем новый объект XMLHttpRequest
    //--------------------------------------------------
    xhrCards.onreadystatechange = function() // Устанавливаем функцию, которая будет вызываться при изменении состояния объекта `xhr`
    {
        if (xhrCards.readyState === 4 && xhrCards.status === 200) // Проверяем, что запрос завершен и успешен
        {
            let jsonData = JSON.parse(xhrCards.responseText); // Разбираем JSON-данные

            cardsContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых карточек

            // Создаем карточки и добавляем их в контейнер
            for (let i = 0; i < jsonData.length; i++)
            {
                let cardData = jsonData[i];
                let card = createCard(cardData.id, cardData.linkToPicture, cardData.wordsInTheTargetLanguage, cardData.wordsInNativeLanguage);
                cardsContainer.appendChild(card);
            }
        }
    };
    xhrCards.open("POST", path); // Открываем соединение с сервером с помощью метода "POST" и адреса "cards.php"
    xhrCards.send(); // Отправляем запрос на сервер
    //--------------------------------------------------
    // Стилизуем контейнер
    cardsContainer.style.maxWidth = "1200px";
    cardsContainer.style.margin = "0 auto";
    cardsContainer.style.display = "flex";
    cardsContainer.style.justifyContent = "space-around";
    cardsContainer.style.flexWrap = "wrap";
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
            user.style.display = "";
            user.textContent = userData[0];
            header__loginRegistration.style.display = "none";
        }
    }
};
xhrData.open("POST", "registrationDate.php"); // Открываем соединение с сервером с помощью метода "POST" и адреса "cards.php"
xhrData.send(); // Отправляем запрос на сервер
//==================================================