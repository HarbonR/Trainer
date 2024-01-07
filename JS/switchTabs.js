//==================================================
// Функционал для переключения вкладок
let header = document.getElementById("header");
let burger = document.getElementById("burger");
let tabs = header.getElementsByClassName("enteredTab");
let header__cards = document.getElementById("header__cards");
let header__trains = document.getElementById("header__trains");
let user = document.getElementById("user");
let user__data = document.getElementById("user__data");
let train__data = document.getElementById("train__data");
let search = document.getElementById("search");
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
    train__data.style.display = "none";
    header__cards.classList.add("enteredTab");
    search.style.marginTop = "130px";
    getCards("../PHP/cards.php", "Card");
    header.style.top = "-1000px"; // Скрываем бургер
};
//--------------------------------------------------
header__trains.onclick = function() // Выбираем вкладку тренировка
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    user__data.style.display = "none";
    train__data.removeAttribute("style");
    header__trains.className = "enteredTab";
    search.style.marginTop = "20px";
    getCards("../PHP/trainCards.php", "Train");
    header.style.top = "-1000px"; // Скрываем бургер
}
//--------------------------------------------------
user.onclick = function() // Выбираем вкладку пользователь
{
    for (let i = 0; i < tabs.length; i++)
    {
        tabs[i].classList.remove("enteredTab");
    }
    user__data.removeAttribute("style");
    train__data.style.display = "none";
    user.className = "enteredTab";
    search.style.marginTop = "20px";
    getCards("../PHP/userCards.php", "User");
    header.style.top = "-1000px"; // Скрываем бургер
}
//--------------------------------------------------
// Для открытия и закрытия бургера
burger.onclick = function()
{
    if (header.style.top == "111px")
        header.style.top = "-1000px";
    else
        header.style.top = "111px";
}
//==================================================
// Функция создания для создания карточек настроек
function createSettingCards(settingLabel, id)
{
    // Создаем основной элемент div с классом "settings__card"
    let settingsCard = document.createElement("div");
    settingsCard.classList.add("settings__card");

    // Создаем элемент div с классом "active-picture"
    let activePicture = document.createElement("div");
    activePicture.classList.add("active-picture");

    // Создаем элемент label с классом "switch"
    let label = document.createElement("label");
    label.classList.add("switch");

    // Создаем элемент input с атрибутом type равным "checkbox"
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = "checkbox id: " + id;
    checkbox.name = "checkbox name: " + id;
    checkbox.autocomplete = "Off";

    // Создаем элемент span с классом "slider"
    let slider = document.createElement("span");
    slider.classList.add("slider");

    // Добавляем элементы checkbox и slider внутрь элемента label
    label.appendChild(checkbox);
    label.appendChild(slider);

    // Создаем элемент div с классом "active-picture__picture"
    let activePicturePicture = document.createElement("div");
    activePicturePicture.classList.add("active-picture__picture");
    activePicturePicture.textContent = "Карточка";

    // Добавляем элементы label и activePicturePicture внутрь элемента activePicture
    activePicture.appendChild(label);
    activePicture.appendChild(activePicturePicture);

    // Создаем элемент div с классом "active-setting"
    let activeSetting = document.createElement("div");
    activeSetting.classList.add("active-setting");

    // Создаем элемент div с классом "active-setting__button"
    let activeSettingButton = document.createElement("div");
    activeSettingButton.classList.add("active-setting__button");
    activeSettingButton.textContent = "+";
    activeSettingButton.onclick = function()
    {
        if(activeSettingButton.classList.contains("active-setting__button__entered"))
        {
            activeSettingButton.classList.remove("active-setting__button__entered");
        }
        else
        {
            activeSettingButton.classList.add("active-setting__button__entered");
        }
    }

    // Создаем элемент div с классом "active-setting__label"
    let activeSettingLabel = document.createElement("div");
    activeSettingLabel.classList.add("active-setting__label");
    activeSettingLabel.textContent = settingLabel;

    // Добавляем элементы activeSettingButton и activeSettingLabel внутрь элемента activeSetting
    activeSetting.appendChild(activeSettingButton);
    activeSetting.appendChild(activeSettingLabel);

    // Добавляем элементы activePicture и activeSetting внутрь элемента settingsCard
    settingsCard.appendChild(activePicture);
    settingsCard.appendChild(activeSetting);

    return settingsCard;
}
//==================================================
// Функция для отображения карточек настроек
function getSettingCards()
{
    let settingsContainer = document.getElementById("settings__container"); // Получаем элемент с ID "settings__container"
    let arraySettingLabel = ["Сопоставление слов", "Напиши слово", "Проверка слов на изучаемом языке", "Узнай слово на слух",
    "Проверка слов на родном языке", "Напиши, что услышал", "Составление слова"];
    settingsContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новых карточек
    for(let i = 0; i < arraySettingLabel.length; i++)
    {
        let settingCard = createSettingCards(arraySettingLabel[i], i + 1);
        settingsContainer.appendChild(settingCard);
    }
}
//==================================================
let settings = document.getElementById("settings");
settings.onclick = function()
{
    settings.classList.add("enteredTab");
    let modalWindowSettings = document.getElementById("modal-window__settings");
    modalWindowSettings.style.display = "flex";
    getSettingCards();
}