//==================================================
// Функционал для переключения вкладок
let header = document.getElementById("header");
let tabs = header.getElementsByClassName("enteredTab");
let header__cards = document.getElementById("header__cards");
let header__trains = document.getElementById("header__trains");
//--------------------------------------------------
header__cards.onclick = function()
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    header__cards.classList.add("enteredTab");
};
//--------------------------------------------------
header__trains.onclick = function()
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    header__trains.className = "enteredTab";
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
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Меняем цвет заднего фона окна на серый
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
// Создаем функцию для создания карточки
function createCard(linkToPicture, wordsInTheTargetLanguage, wordsInNativeLanguage)
{
    // Создаем элементы для карточки
    let card = document.createElement("div");
    card.className = "cards";
  
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
// Полученние данных о карточках
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
            let card = createCard(cardData.linkToPicture, cardData.wordsInTheTargetLanguage, cardData.wordsInNativeLanguage);
            cardsContainer.appendChild(card);
        }
    }
};
xhrCards.open("POST", "cards.php"); // Открываем соединение с сервером с помощью метода "POST" и адреса "cards.php"
xhrCards.send(); // Отправляем запрос на сервер
//--------------------------------------------------
// Стилизуем контейнер
cardsContainer.style.maxWidth = "1200px";
cardsContainer.style.margin = "0 auto";
cardsContainer.style.display = "flex";
cardsContainer.style.justifyContent = "space-around";
cardsContainer.style.flexWrap = "wrap";
//==================================================
// Функция для отправки данных о пользователе
let user = document.getElementById("user");
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
user.onclick = function()
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    user.className = "enteredTab";
}
//==================================================