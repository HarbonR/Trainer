//==================================================
// Функционал для переключения вкладок
let header = document.getElementById("header");
let burger = document.getElementById("burger");
let tabs = header.getElementsByClassName("enteredTab");
let header__cards = document.getElementById("header__cards");
let header__trains = document.getElementById("header__trains");
let user = document.getElementById("user");
let user__data = document.getElementById("user__data");
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
    header__cards.classList.add("enteredTab");
    search.style.marginTop = "100px";
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
    header__trains.className = "enteredTab";
    search.style.marginTop = "100px";
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
    user.className = "enteredTab";
    search.style.marginTop = "20px";
    getCards("../PHP/userCards.php", "User");
    header.style.top = "-1000px"; // Скрываем бургер
}
//--------------------------------------------------
// Для открытия и закрытия бургера
burger.onclick = function()
{
    if ( header.style.top == "83px")
        header.style.top = "-1000px";
    else
        header.style.top = "83px";
}
//==================================================